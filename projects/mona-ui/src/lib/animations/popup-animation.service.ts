import { ElementRef, Injectable } from "@angular/core";
import { AnimationService } from "./animation.service";
import { PopupRef } from "../popup/models/PopupRef";
import { filter, takeUntil } from "rxjs";
import { AnimationState } from "./AnimationState";

/**
 * Service for animating popups of various components.
 * Do not expose this service to the public. It is only used internally.
 * @internal
 */
@Injectable({
    providedIn: "root"
})
export class PopupAnimationService {
    public constructor(private readonly animationService: AnimationService) {}

    public animateDropdown(popupRef: PopupRef, state: AnimationState): void {
        switch (state) {
            case AnimationState.Show:
                this.animationService.slideDown(popupRef.overlayRef.overlayElement.firstElementChild as Element);
                this.animateDropdownBoxShadow(popupRef, state);
                break;
            case AnimationState.Hide:
                this.animateDropdownBoxShadow(popupRef, state);
                this.animationService.slideUp(popupRef.overlayRef.overlayElement.firstElementChild as Element);
        }
    }

    public animatePopover(popupRef: PopupRef, state: AnimationState): void {
        switch (state) {
            case AnimationState.Show:
                this.animationService.fadeIn(popupRef.overlayRef.overlayElement.firstElementChild as Element, 200);
                this.animatePopoverBoxShadow(popupRef, state);
                break;
            case AnimationState.Hide:
                this.animatePopoverBoxShadow(popupRef, state);
                this.animationService.fadeOut(popupRef.overlayRef.overlayElement.firstElementChild as Element, 300);
        }
    }

    public setupDropdownOutsideClickCloseAnimation(popupRef: PopupRef): void {
        popupRef.overlayRef
            .outsidePointerEvents()
            .pipe(takeUntil(popupRef.closed))
            .subscribe(e => {
                if (e.type.includes("click")) {
                    this.animateDropdownBoxShadow(popupRef, AnimationState.Hide);
                    this.animationService.slideUp(popupRef.overlayRef.overlayElement.firstElementChild as Element);
                    popupRef.closeWithDelay();
                }
            });
    }

    public setupPopoverOutsideClickCloseAnimation(popupRef: PopupRef, target: Element | ElementRef): void {
        popupRef.overlayRef
            .outsidePointerEvents()
            .pipe(
                filter(e => {
                    const targetElement = target instanceof ElementRef ? target.nativeElement : target;
                    return !targetElement.contains(e.target as Element);
                }),
                takeUntil(popupRef.closed)
            )
            .subscribe(e => {
                if (e.type.includes("click")) {
                    this.animateDropdownBoxShadow(popupRef, AnimationState.Hide);
                    this.animationService.fadeOut(popupRef.overlayRef.overlayElement.firstElementChild as Element);
                    popupRef.closeWithDelay();
                }
            });
    }

    private animateDropdownBoxShadow(popupRef: PopupRef, state: AnimationState): void {
        switch (state) {
            case AnimationState.Show:
                this.animationService.animate({
                    element: popupRef.overlayRef.overlayElement,
                    duration: 200,
                    delay: 150,
                    startStyles: { boxShadow: "none" },
                    endStyles: { boxShadow: "var(--mona-popup-shadow)" }
                });
                break;
            case AnimationState.Hide:
                this.animationService.animate({
                    element: popupRef.overlayRef.overlayElement,
                    duration: 10,
                    startStyles: { boxShadow: "var(--mona-popup-shadow)" },
                    endStyles: { boxShadow: "none" }
                });
                break;
        }
    }

    private animatePopoverBoxShadow(popupRef: PopupRef, state: AnimationState): void {
        switch (state) {
            case AnimationState.Show:
                this.animationService.animate({
                    element: popupRef.overlayRef.overlayElement,
                    duration: 200,
                    startStyles: { boxShadow: "none" },
                    endStyles: { boxShadow: "var(--mona-popup-shadow)" }
                });
                break;
            case AnimationState.Hide:
                this.animationService.animate({
                    element: popupRef.overlayRef.overlayElement,
                    startStyles: { boxShadow: "var(--mona-popup-shadow)" },
                    endStyles: { boxShadow: "none" }
                });
                break;
        }
    }
}
