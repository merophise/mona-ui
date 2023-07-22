import { Injectable, Injector, OnDestroy, TemplateRef } from "@angular/core";
import { PopupSettings } from "../models/PopupSettings";
import { Overlay, PositionStrategy } from "@angular/cdk/overlay";
import { ComponentPortal } from "@angular/cdk/portal";
import { PopupRef } from "../models/PopupRef";
import { PopupInjectionToken } from "../models/PopupInjectionToken";
import { DefaultPositions } from "../models/DefaultPositions";
import { filter, fromEvent, Subject, take, takeUntil } from "rxjs";
import { PopupCloseEvent, PopupCloseSource } from "../models/PopupCloseEvent";
import { Dictionary } from "@mirei/ts-collections";
import { PopupState } from "../models/PopupState";
import { v4 } from "uuid";
import { PopupReference } from "../models/PopupReference";
import { PopupWrapperComponent } from "../components/popup-wrapper/popup-wrapper.component";
import { PopupInjectorData } from "../models/PopupInjectorData";

@Injectable({
    providedIn: "root"
})
export class PopupService implements OnDestroy {
    private readonly outsideEventsToClose = ["click", "mousedown", "dblclick", "contextmenu", "auxclick"];
    private readonly popupStateMap: Dictionary<string, PopupState> = new Dictionary<string, PopupState>();
    private readonly serviceDestroy$: Subject<void> = new Subject<void>();

    public constructor(private readonly injector: Injector, private readonly overlay: Overlay) {}

    public create(settings: PopupSettings): PopupRef {
        const uid = v4();
        let positionStrategy: PositionStrategy;
        if (settings.positionStrategy === "global") {
            positionStrategy = this.overlay.position().global();
        } else {
            positionStrategy = this.overlay
                .position()
                .flexibleConnectedTo(settings.anchor)
                .withPositions(settings.positions ?? DefaultPositions)
                .withDefaultOffsetX(settings.offset?.horizontal ?? 0)
                .withDefaultOffsetY(settings.offset?.vertical ?? 0)
                .withPush(settings.withPush ?? true);
        }

        const panelClass = settings.popupClass
            ? ["mona-popup-content"].concat(settings.popupClass)
            : "mona-popup-content";

        const overlayRef = this.overlay.create({
            positionStrategy,
            hasBackdrop: settings.hasBackdrop ?? true,
            height: settings.height,
            maxHeight: settings.maxHeight,
            maxWidth: settings.maxWidth,
            minHeight: settings.minHeight,
            minWidth: settings.minWidth,
            width: settings.width,
            panelClass,
            backdropClass: settings.backdropClass ?? "transparent"
        });

        const preventClose = settings.preventClose;
        const popupReference = new PopupReference(overlayRef);

        const createInjector = (isTemplate: boolean) => {
            const tokenValue = !isTemplate
                ? settings.data
                : ({
                      popupReference,
                      closeOnBackdropClick: settings.closeOnBackdropClick ?? true,
                      closeOnEscape: settings.closeOnEscape ?? true,
                      closeOnOutsideClick: settings.closeOnOutsideClick ?? true,
                      preventClose: settings.preventClose,
                      wrapperClass: settings.popupWrapperClass
                  } as PopupInjectorData);
            return Injector.create({
                parent: this.injector,
                providers: [
                    { provide: PopupRef, useFactory: () => popupReference.popupRef },
                    { provide: PopupInjectionToken, useValue: tokenValue },
                    ...(settings.providers ?? [])
                ]
            });
        };

        if (settings.content instanceof TemplateRef) {
            const portal = new ComponentPortal(PopupWrapperComponent, null, createInjector(true));
            popupReference.componentRef = overlayRef.attach(portal);
            const component = popupReference.componentRef.instance as PopupWrapperComponent;
            settings.closeOnBackdropClick = false; // handled by wrapper component
            settings.closeOnEscape = false; // handled by wrapper component
            settings.closeOnOutsideClick = false; // handled by wrapper component
            component.templateRef = settings.content;
            popupReference.componentRef.changeDetectorRef.detectChanges();
        } else {
            const portal = new ComponentPortal(settings.content, null, createInjector(false));
            popupReference.componentRef = overlayRef.attach(portal);
        }

        if (settings.hasBackdrop) {
            if (settings.closeOnBackdropClick ?? true) {
                const backdropSubject: Subject<void> = new Subject<void>();
                const subscription = overlayRef
                    .backdropClick()
                    .pipe(takeUntil(backdropSubject))
                    .subscribe(e => {
                        const event = new PopupCloseEvent({ event: e, via: PopupCloseSource.BackdropClick });
                        const prevented = preventClose ? preventClose(event) || event.isDefaultPrevented() : false;
                        if (!prevented) {
                            popupReference.close(event);
                            this.popupStateMap.remove(uid);
                            backdropSubject.next();
                            backdropSubject.complete();
                        }
                    });
                popupReference.closed.pipe(take(1)).subscribe(() => subscription.unsubscribe());
            }
        } else {
            if (settings.closeOnOutsideClick ?? true) {
                const subscription = overlayRef
                    .outsidePointerEvents()
                    .pipe(takeUntil(this.serviceDestroy$))
                    .subscribe(event => {
                        if (this.outsideEventsToClose.includes(event.type)) {
                            const closeEvent = new PopupCloseEvent({ event, via: PopupCloseSource.OutsideClick });
                            const prevented = preventClose
                                ? preventClose(closeEvent) || closeEvent.isDefaultPrevented()
                                : false;
                            if (!prevented) {
                                popupReference.close(closeEvent);
                                this.popupStateMap.remove(uid);
                                subscription.unsubscribe();
                            }
                        }
                    });
                popupReference.closed.pipe(take(1)).subscribe(() => subscription.unsubscribe());
            }
        }
        popupReference.closed.pipe(take(1)).subscribe(() => {
            this.popupStateMap.remove(uid);
        });
        this.popupStateMap.add(uid, {
            uid,
            popupRef: popupReference.popupRef,
            settings
        });
        this.setEventListeners(this.popupStateMap.get(uid));
        return popupReference.popupRef;
    }

    public ngOnDestroy(): void {
        this.serviceDestroy$.next();
        this.serviceDestroy$.complete();
    }

    private setEventListeners(state: PopupState): void {
        if (state.settings.closeOnEscape ?? true) {
            fromEvent<KeyboardEvent>(document, "keydown")
                .pipe(
                    filter(() => state.popupRef.overlayRef.hasAttached()),
                    filter(event => event.key === "Escape"),
                    takeUntil(state.popupRef.closed)
                )
                .subscribe(event => {
                    if (event.key === "Escape") {
                        const closeEvent = new PopupCloseEvent({ event, via: PopupCloseSource.Escape });
                        const prevented = state.settings.preventClose
                            ? state.settings.preventClose(closeEvent) || closeEvent.isDefaultPrevented()
                            : false;
                        if (!prevented) {
                            state.popupRef.close(closeEvent);
                            this.popupStateMap.remove(state.uid);
                        }
                    }
                });
        }
    }
}
