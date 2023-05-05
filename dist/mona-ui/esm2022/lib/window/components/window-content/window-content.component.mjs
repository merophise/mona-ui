import { ChangeDetectionStrategy, Component, ElementRef, Inject, TemplateRef, ViewChild, ViewContainerRef } from "@angular/core";
import { PopupInjectionToken } from "../../../popup/models/PopupInjectionToken";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { WindowCloseEvent } from "../../models/WindowCloseEvent";
import { PopupCloseSource } from "../../../popup/models/PopupCloseEvent";
import { PopupService } from "../../../popup/services/popup.service";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../buttons/modules/button/directives/button.directive";
import * as i3 from "@fortawesome/angular-fontawesome";
import * as i4 from "../../directives/window-resize-handler.directive";
import * as i5 from "../../directives/window-drag-handler.directive";
export class WindowContentComponent {
    constructor(injector, windowData, elementRef) {
        this.injector = injector;
        this.windowData = windowData;
        this.elementRef = elementRef;
        this.closeIcon = faClose;
        this.contentType = "template";
        if (windowData.content instanceof TemplateRef) {
            this.contentType = "template";
        }
        else {
            this.contentType = "component";
            this.componentRef = PopupService.popupAnchorDirective.viewContainerRef.createComponent(windowData.content, {
                injector: this.injector
            });
        }
    }
    ngAfterViewInit() {
        if (this.contentType === "component" && this.componentAnchor && this.componentRef) {
            const index = PopupService.popupAnchorDirective.viewContainerRef.indexOf(this.componentRef.hostView);
            if (index !== -1) {
                PopupService.popupAnchorDirective.viewContainerRef.detach(index);
            }
            this.componentAnchor.insert(this.componentRef.hostView, 0);
            this.componentRef.changeDetectorRef.detectChanges();
        }
        this.focusElement();
    }
    ngOnInit() { }
    onCloseClick(event) {
        const closeEvent = new WindowCloseEvent({ event, via: PopupCloseSource.CloseButton });
        if (this.windowData.preventClose && this.windowData.preventClose(closeEvent)) {
            return;
        }
        this.windowData.windowReference.close();
    }
    focusElement() {
        const element = this.windowData.focusedElement;
        if (element === undefined) {
            return;
        }
        const windowElement = this.elementRef.nativeElement;
        if (element instanceof ElementRef) {
            element.nativeElement.focus();
        }
        else if (element instanceof HTMLElement) {
            element.focus();
        }
        else {
            const elements = windowElement.querySelectorAll(element);
            if (elements.length > 0) {
                elements[0].focus();
            }
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: WindowContentComponent, deps: [{ token: i0.Injector }, { token: PopupInjectionToken }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: WindowContentComponent, selector: "mona-window-content", viewQueries: [{ propertyName: "componentAnchor", first: true, predicate: ["componentAnchor"], descendants: true, read: ViewContainerRef }], ngImport: i0, template: "<div class=\"mona-window-content-container\">\n    <div class=\"mona-window-title-bar\" monaWindowDragHandler [draggable]=\"windowData.draggable\" [windowRef]=\"windowData.windowReference\">\n        <div class=\"mona-window-title-container\">\n            <span class=\"mona-window-title\" *ngIf=\"!windowData.titleTemplate\">{{windowData.title ?? ''}}</span>\n            <ng-container [ngTemplateOutlet]=\"windowData.titleTemplate\" *ngIf=\"windowData.titleTemplate\"></ng-container>\n        </div>\n        <div class=\"mona-window-title-bar-actions\">\n            <button monaButton class=\"mona-window-title-bar-action\" [flat]=\"true\" (click)=\"onCloseClick($event)\">\n                <fa-icon [icon]=\"closeIcon\"></fa-icon>\n            </button>\n        </div>\n    </div>\n    <div class=\"mona-window-content\">\n        <ng-container [ngTemplateOutlet]=\"$any(windowData.content)\" *ngIf=\"contentType==='template'\"></ng-container>\n        <ng-container #componentAnchor *ngIf=\"contentType==='component'\"></ng-container>\n    </div>\n\n    <div monaWindowResizeHandler [minWidth]=\"windowData.minWidth\" [minHeight]=\"windowData.minHeight\"\n         [maxWidth]=\"windowData.maxWidth\" [maxHeight]=\"windowData.maxHeight\"\n         [windowRef]=\"windowData.windowReference\" direction=\"north\" class=\"mona-window-resizer mona-window-resizer-north\"\n         *ngIf=\"windowData.resizable\"></div>\n    <div monaWindowResizeHandler [minWidth]=\"windowData.minWidth\" [minHeight]=\"windowData.minHeight\"\n         [maxWidth]=\"windowData.maxWidth\" [maxHeight]=\"windowData.maxHeight\"\n         [windowRef]=\"windowData.windowReference\" direction=\"south\" class=\"mona-window-resizer mona-window-resizer-south\"\n         *ngIf=\"windowData.resizable\"></div>\n    <div monaWindowResizeHandler [minWidth]=\"windowData.minWidth\" [minHeight]=\"windowData.minHeight\"\n         [maxWidth]=\"windowData.maxWidth\" [maxHeight]=\"windowData.maxHeight\"\n         [windowRef]=\"windowData.windowReference\" direction=\"east\" class=\"mona-window-resizer mona-window-resizer-east\"\n         *ngIf=\"windowData.resizable\"></div>\n    <div monaWindowResizeHandler [minWidth]=\"windowData.minWidth\" [minHeight]=\"windowData.minHeight\"\n         [maxWidth]=\"windowData.maxWidth\" [maxHeight]=\"windowData.maxHeight\"\n         [windowRef]=\"windowData.windowReference\" direction=\"west\" class=\"mona-window-resizer mona-window-resizer-west\"\n         *ngIf=\"windowData.resizable\"></div>\n    <div monaWindowResizeHandler [minWidth]=\"windowData.minWidth\" [minHeight]=\"windowData.minHeight\"\n         [maxWidth]=\"windowData.maxWidth\" [maxHeight]=\"windowData.maxHeight\"\n         [windowRef]=\"windowData.windowReference\" direction=\"northeast\"\n         class=\"mona-window-resizer mona-window-resizer-northeast\" *ngIf=\"windowData.resizable\"></div>\n    <div monaWindowResizeHandler [minWidth]=\"windowData.minWidth\" [minHeight]=\"windowData.minHeight\"\n         [maxWidth]=\"windowData.maxWidth\" [maxHeight]=\"windowData.maxHeight\"\n         [windowRef]=\"windowData.windowReference\" direction=\"northwest\"\n         class=\"mona-window-resizer mona-window-resizer-northwest\" *ngIf=\"windowData.resizable\"></div>\n    <div monaWindowResizeHandler [minWidth]=\"windowData.minWidth\" [minHeight]=\"windowData.minHeight\"\n         [maxWidth]=\"windowData.maxWidth\" [maxHeight]=\"windowData.maxHeight\"\n         [windowRef]=\"windowData.windowReference\" direction=\"southeast\"\n         class=\"mona-window-resizer mona-window-resizer-southeast\" *ngIf=\"windowData.resizable\"></div>\n    <div monaWindowResizeHandler [minWidth]=\"windowData.minWidth\" [minHeight]=\"windowData.minHeight\"\n         [maxWidth]=\"windowData.maxWidth\" [maxHeight]=\"windowData.maxHeight\"\n         [windowRef]=\"windowData.windowReference\" direction=\"southwest\"\n         class=\"mona-window-resizer mona-window-resizer-southwest\" *ngIf=\"windowData.resizable\"></div>\n\n</div>\n", styles: [":host{width:100%;height:100%}div.mona-window-content-container{display:flex;flex-direction:column;overflow:hidden;position:relative;width:100%;height:100%}div.mona-window-title-bar{display:flex;align-items:center;justify-content:flex-start;height:var(--mona-input-height);border-bottom:1px solid var(--mona-border-color);background-color:var(--mona-background-dark)}div.mona-window-title-container{flex:1;padding:0 10px;height:100%;display:flex;align-items:center;cursor:default;-webkit-user-select:none;user-select:none}span.mona-window-title{font-weight:700;color:var(--mona-text)}div.mona-window-title-bar-actions{display:flex;align-items:center;justify-content:space-evenly}.mona-window-content{flex:1;overflow:auto;padding:10px}.mona-window-resizer{position:absolute;display:flex;background-color:transparent}.mona-window-resizer-north{top:0;left:0;right:0;height:10px;cursor:ns-resize}.mona-window-resizer-south{bottom:0;left:0;right:0;height:10px;cursor:ns-resize}.mona-window-resizer-east{top:0;right:0;bottom:0;width:10px;cursor:ew-resize}.mona-window-resizer-west{top:0;left:0;bottom:0;width:10px;cursor:ew-resize}.mona-window-resizer-northeast{top:0;right:0;width:10px;height:10px;cursor:nesw-resize}.mona-window-resizer-northwest{top:0;left:0;width:10px;height:10px;cursor:nwse-resize}.mona-window-resizer-southeast{bottom:0;right:0;width:10px;height:10px;cursor:nwse-resize}.mona-window-resizer-southwest{bottom:0;left:0;width:10px;height:10px;cursor:nesw-resize}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i2.ButtonDirective, selector: "[monaButton]", inputs: ["disabled", "flat", "primary", "selected", "toggleable"], outputs: ["selectedChange"] }, { kind: "component", type: i3.FaIconComponent, selector: "fa-icon", inputs: ["icon", "title", "spin", "pulse", "mask", "styles", "flip", "size", "pull", "border", "inverse", "symbol", "rotate", "fixedWidth", "classes", "transform", "a11yRole"] }, { kind: "directive", type: i4.WindowResizeHandlerDirective, selector: "div[monaWindowResizeHandler]", inputs: ["direction", "maxHeight", "maxWidth", "minHeight", "minWidth", "windowRef"] }, { kind: "directive", type: i5.WindowDragHandlerDirective, selector: "div[monaWindowDragHandler]", inputs: ["draggable", "windowRef"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: WindowContentComponent, decorators: [{
            type: Component,
            args: [{ selector: "mona-window-content", changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"mona-window-content-container\">\n    <div class=\"mona-window-title-bar\" monaWindowDragHandler [draggable]=\"windowData.draggable\" [windowRef]=\"windowData.windowReference\">\n        <div class=\"mona-window-title-container\">\n            <span class=\"mona-window-title\" *ngIf=\"!windowData.titleTemplate\">{{windowData.title ?? ''}}</span>\n            <ng-container [ngTemplateOutlet]=\"windowData.titleTemplate\" *ngIf=\"windowData.titleTemplate\"></ng-container>\n        </div>\n        <div class=\"mona-window-title-bar-actions\">\n            <button monaButton class=\"mona-window-title-bar-action\" [flat]=\"true\" (click)=\"onCloseClick($event)\">\n                <fa-icon [icon]=\"closeIcon\"></fa-icon>\n            </button>\n        </div>\n    </div>\n    <div class=\"mona-window-content\">\n        <ng-container [ngTemplateOutlet]=\"$any(windowData.content)\" *ngIf=\"contentType==='template'\"></ng-container>\n        <ng-container #componentAnchor *ngIf=\"contentType==='component'\"></ng-container>\n    </div>\n\n    <div monaWindowResizeHandler [minWidth]=\"windowData.minWidth\" [minHeight]=\"windowData.minHeight\"\n         [maxWidth]=\"windowData.maxWidth\" [maxHeight]=\"windowData.maxHeight\"\n         [windowRef]=\"windowData.windowReference\" direction=\"north\" class=\"mona-window-resizer mona-window-resizer-north\"\n         *ngIf=\"windowData.resizable\"></div>\n    <div monaWindowResizeHandler [minWidth]=\"windowData.minWidth\" [minHeight]=\"windowData.minHeight\"\n         [maxWidth]=\"windowData.maxWidth\" [maxHeight]=\"windowData.maxHeight\"\n         [windowRef]=\"windowData.windowReference\" direction=\"south\" class=\"mona-window-resizer mona-window-resizer-south\"\n         *ngIf=\"windowData.resizable\"></div>\n    <div monaWindowResizeHandler [minWidth]=\"windowData.minWidth\" [minHeight]=\"windowData.minHeight\"\n         [maxWidth]=\"windowData.maxWidth\" [maxHeight]=\"windowData.maxHeight\"\n         [windowRef]=\"windowData.windowReference\" direction=\"east\" class=\"mona-window-resizer mona-window-resizer-east\"\n         *ngIf=\"windowData.resizable\"></div>\n    <div monaWindowResizeHandler [minWidth]=\"windowData.minWidth\" [minHeight]=\"windowData.minHeight\"\n         [maxWidth]=\"windowData.maxWidth\" [maxHeight]=\"windowData.maxHeight\"\n         [windowRef]=\"windowData.windowReference\" direction=\"west\" class=\"mona-window-resizer mona-window-resizer-west\"\n         *ngIf=\"windowData.resizable\"></div>\n    <div monaWindowResizeHandler [minWidth]=\"windowData.minWidth\" [minHeight]=\"windowData.minHeight\"\n         [maxWidth]=\"windowData.maxWidth\" [maxHeight]=\"windowData.maxHeight\"\n         [windowRef]=\"windowData.windowReference\" direction=\"northeast\"\n         class=\"mona-window-resizer mona-window-resizer-northeast\" *ngIf=\"windowData.resizable\"></div>\n    <div monaWindowResizeHandler [minWidth]=\"windowData.minWidth\" [minHeight]=\"windowData.minHeight\"\n         [maxWidth]=\"windowData.maxWidth\" [maxHeight]=\"windowData.maxHeight\"\n         [windowRef]=\"windowData.windowReference\" direction=\"northwest\"\n         class=\"mona-window-resizer mona-window-resizer-northwest\" *ngIf=\"windowData.resizable\"></div>\n    <div monaWindowResizeHandler [minWidth]=\"windowData.minWidth\" [minHeight]=\"windowData.minHeight\"\n         [maxWidth]=\"windowData.maxWidth\" [maxHeight]=\"windowData.maxHeight\"\n         [windowRef]=\"windowData.windowReference\" direction=\"southeast\"\n         class=\"mona-window-resizer mona-window-resizer-southeast\" *ngIf=\"windowData.resizable\"></div>\n    <div monaWindowResizeHandler [minWidth]=\"windowData.minWidth\" [minHeight]=\"windowData.minHeight\"\n         [maxWidth]=\"windowData.maxWidth\" [maxHeight]=\"windowData.maxHeight\"\n         [windowRef]=\"windowData.windowReference\" direction=\"southwest\"\n         class=\"mona-window-resizer mona-window-resizer-southwest\" *ngIf=\"windowData.resizable\"></div>\n\n</div>\n", styles: [":host{width:100%;height:100%}div.mona-window-content-container{display:flex;flex-direction:column;overflow:hidden;position:relative;width:100%;height:100%}div.mona-window-title-bar{display:flex;align-items:center;justify-content:flex-start;height:var(--mona-input-height);border-bottom:1px solid var(--mona-border-color);background-color:var(--mona-background-dark)}div.mona-window-title-container{flex:1;padding:0 10px;height:100%;display:flex;align-items:center;cursor:default;-webkit-user-select:none;user-select:none}span.mona-window-title{font-weight:700;color:var(--mona-text)}div.mona-window-title-bar-actions{display:flex;align-items:center;justify-content:space-evenly}.mona-window-content{flex:1;overflow:auto;padding:10px}.mona-window-resizer{position:absolute;display:flex;background-color:transparent}.mona-window-resizer-north{top:0;left:0;right:0;height:10px;cursor:ns-resize}.mona-window-resizer-south{bottom:0;left:0;right:0;height:10px;cursor:ns-resize}.mona-window-resizer-east{top:0;right:0;bottom:0;width:10px;cursor:ew-resize}.mona-window-resizer-west{top:0;left:0;bottom:0;width:10px;cursor:ew-resize}.mona-window-resizer-northeast{top:0;right:0;width:10px;height:10px;cursor:nesw-resize}.mona-window-resizer-northwest{top:0;left:0;width:10px;height:10px;cursor:nwse-resize}.mona-window-resizer-southeast{bottom:0;right:0;width:10px;height:10px;cursor:nwse-resize}.mona-window-resizer-southwest{bottom:0;left:0;width:10px;height:10px;cursor:nesw-resize}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PopupInjectionToken]
                }] }, { type: i0.ElementRef }]; }, propDecorators: { componentAnchor: [{
                type: ViewChild,
                args: ["componentAnchor", { read: ViewContainerRef }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2luZG93LWNvbnRlbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbW9uYS11aS9zcmMvbGliL3dpbmRvdy9jb21wb25lbnRzL3dpbmRvdy1jb250ZW50L3dpbmRvdy1jb250ZW50LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21vbmEtdWkvc3JjL2xpYi93aW5kb3cvY29tcG9uZW50cy93aW5kb3ctY29udGVudC93aW5kb3ctY29udGVudC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUgsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFFVCxVQUFVLEVBQ1YsTUFBTSxFQUdOLFdBQVcsRUFFWCxTQUFTLEVBQ1QsZ0JBQWdCLEVBQ25CLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBRWhGLE9BQU8sRUFBRSxPQUFPLEVBQWtCLE1BQU0sbUNBQW1DLENBQUM7QUFDNUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDakUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDekUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVDQUF1QyxDQUFDOzs7Ozs7O0FBUXJFLE1BQU0sT0FBTyxzQkFBc0I7SUFRL0IsWUFDWSxRQUFrQixFQUNVLFVBQThCLEVBQ2pELFVBQW1DO1FBRjVDLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDVSxlQUFVLEdBQVYsVUFBVSxDQUFvQjtRQUNqRCxlQUFVLEdBQVYsVUFBVSxDQUF5QjtRQVZ4QyxjQUFTLEdBQW1CLE9BQU8sQ0FBQztRQUVwQyxnQkFBVyxHQUE2QixVQUFVLENBQUM7UUFVL0QsSUFBSSxVQUFVLENBQUMsT0FBTyxZQUFZLFdBQVcsRUFBRTtZQUMzQyxJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztTQUNqQzthQUFNO1lBQ0gsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7WUFDL0IsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUMsb0JBQW9CLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUNsRixVQUFVLENBQUMsT0FBb0IsRUFDL0I7Z0JBQ0ksUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO2FBQzFCLENBQ0osQ0FBQztTQUNMO0lBQ0wsQ0FBQztJQUVNLGVBQWU7UUFDbEIsSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLFdBQVcsSUFBSSxJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDL0UsTUFBTSxLQUFLLEdBQUcsWUFBWSxDQUFDLG9CQUFvQixDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3JHLElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQyxFQUFFO2dCQUNkLFlBQVksQ0FBQyxvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDcEU7WUFDRCxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMzRCxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3ZEO1FBQ0QsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFTSxRQUFRLEtBQVUsQ0FBQztJQUVuQixZQUFZLENBQUMsS0FBaUI7UUFDakMsTUFBTSxVQUFVLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBQyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUN0RixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQzFFLE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzVDLENBQUM7SUFFTyxZQUFZO1FBQ2hCLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDO1FBQy9DLElBQUksT0FBTyxLQUFLLFNBQVMsRUFBRTtZQUN2QixPQUFPO1NBQ1Y7UUFDRCxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztRQUNwRCxJQUFJLE9BQU8sWUFBWSxVQUFVLEVBQUU7WUFDL0IsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNqQzthQUFNLElBQUksT0FBTyxZQUFZLFdBQVcsRUFBRTtZQUN2QyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDbkI7YUFBTTtZQUNILE1BQU0sUUFBUSxHQUFHLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN6RCxJQUFJLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUNwQixRQUFRLENBQUMsQ0FBQyxDQUFpQixDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ3hDO1NBQ0o7SUFDTCxDQUFDOzhHQWhFUSxzQkFBc0IsMENBVW5CLG1CQUFtQjtrR0FWdEIsc0JBQXNCLDBKQUtPLGdCQUFnQiw2QkNoQzFELGs3SEFtREE7OzJGRHhCYSxzQkFBc0I7a0JBTmxDLFNBQVM7K0JBQ0kscUJBQXFCLG1CQUdkLHVCQUF1QixDQUFDLE1BQU07OzBCQVkxQyxNQUFNOzJCQUFDLG1CQUFtQjtxRUFKeEIsZUFBZTtzQkFEckIsU0FBUzt1QkFBQyxpQkFBaUIsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQWZ0ZXJWaWV3SW5pdCxcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgICBDb21wb25lbnQsXG4gICAgQ29tcG9uZW50UmVmLFxuICAgIEVsZW1lbnRSZWYsXG4gICAgSW5qZWN0LFxuICAgIEluamVjdG9yLFxuICAgIE9uSW5pdCxcbiAgICBUZW1wbGF0ZVJlZixcbiAgICBUeXBlLFxuICAgIFZpZXdDaGlsZCxcbiAgICBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQb3B1cEluamVjdGlvblRva2VuIH0gZnJvbSBcIi4uLy4uLy4uL3BvcHVwL21vZGVscy9Qb3B1cEluamVjdGlvblRva2VuXCI7XG5pbXBvcnQgeyBXaW5kb3dJbmplY3RvckRhdGEgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL1dpbmRvd0luamVjdG9yRGF0YVwiO1xuaW1wb3J0IHsgZmFDbG9zZSwgSWNvbkRlZmluaXRpb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgeyBXaW5kb3dDbG9zZUV2ZW50IH0gZnJvbSBcIi4uLy4uL21vZGVscy9XaW5kb3dDbG9zZUV2ZW50XCI7XG5pbXBvcnQgeyBQb3B1cENsb3NlU291cmNlIH0gZnJvbSBcIi4uLy4uLy4uL3BvcHVwL21vZGVscy9Qb3B1cENsb3NlRXZlbnRcIjtcbmltcG9ydCB7IFBvcHVwU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9wb3B1cC9zZXJ2aWNlcy9wb3B1cC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm1vbmEtd2luZG93LWNvbnRlbnRcIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3dpbmRvdy1jb250ZW50LmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL3dpbmRvdy1jb250ZW50LmNvbXBvbmVudC5zY3NzXCJdLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFdpbmRvd0NvbnRlbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICAgIHB1YmxpYyByZWFkb25seSBjbG9zZUljb246IEljb25EZWZpbml0aW9uID0gZmFDbG9zZTtcbiAgICBwdWJsaWMgcmVhZG9ubHkgY29tcG9uZW50UmVmPzogQ29tcG9uZW50UmVmPGFueT47XG4gICAgcHVibGljIHJlYWRvbmx5IGNvbnRlbnRUeXBlOiBcInRlbXBsYXRlXCIgfCBcImNvbXBvbmVudFwiID0gXCJ0ZW1wbGF0ZVwiO1xuXG4gICAgQFZpZXdDaGlsZChcImNvbXBvbmVudEFuY2hvclwiLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSlcbiAgICBwdWJsaWMgY29tcG9uZW50QW5jaG9yITogVmlld0NvbnRhaW5lclJlZjtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgICAgIEBJbmplY3QoUG9wdXBJbmplY3Rpb25Ub2tlbikgcHVibGljIHdpbmRvd0RhdGE6IFdpbmRvd0luamVjdG9yRGF0YSxcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PlxuICAgICkge1xuICAgICAgICBpZiAod2luZG93RGF0YS5jb250ZW50IGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGVudFR5cGUgPSBcInRlbXBsYXRlXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRlbnRUeXBlID0gXCJjb21wb25lbnRcIjtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50UmVmID0gUG9wdXBTZXJ2aWNlLnBvcHVwQW5jaG9yRGlyZWN0aXZlLnZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KFxuICAgICAgICAgICAgICAgIHdpbmRvd0RhdGEuY29udGVudCBhcyBUeXBlPGFueT4sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpbmplY3RvcjogdGhpcy5pbmplY3RvclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5jb250ZW50VHlwZSA9PT0gXCJjb21wb25lbnRcIiAmJiB0aGlzLmNvbXBvbmVudEFuY2hvciAmJiB0aGlzLmNvbXBvbmVudFJlZikge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBQb3B1cFNlcnZpY2UucG9wdXBBbmNob3JEaXJlY3RpdmUudmlld0NvbnRhaW5lclJlZi5pbmRleE9mKHRoaXMuY29tcG9uZW50UmVmLmhvc3RWaWV3KTtcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBQb3B1cFNlcnZpY2UucG9wdXBBbmNob3JEaXJlY3RpdmUudmlld0NvbnRhaW5lclJlZi5kZXRhY2goaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRBbmNob3IuaW5zZXJ0KHRoaXMuY29tcG9uZW50UmVmLmhvc3RWaWV3LCAwKTtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50UmVmLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZvY3VzRWxlbWVudCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHt9XG5cbiAgICBwdWJsaWMgb25DbG9zZUNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGNsb3NlRXZlbnQgPSBuZXcgV2luZG93Q2xvc2VFdmVudCh7IGV2ZW50LCB2aWE6IFBvcHVwQ2xvc2VTb3VyY2UuQ2xvc2VCdXR0b24gfSk7XG4gICAgICAgIGlmICh0aGlzLndpbmRvd0RhdGEucHJldmVudENsb3NlICYmIHRoaXMud2luZG93RGF0YS5wcmV2ZW50Q2xvc2UoY2xvc2VFdmVudCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLndpbmRvd0RhdGEud2luZG93UmVmZXJlbmNlLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmb2N1c0VsZW1lbnQoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLndpbmRvd0RhdGEuZm9jdXNlZEVsZW1lbnQ7XG4gICAgICAgIGlmIChlbGVtZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB3aW5kb3dFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgRWxlbWVudFJlZikge1xuICAgICAgICAgICAgZWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgICBlbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50cyA9IHdpbmRvd0VsZW1lbnQucXVlcnlTZWxlY3RvckFsbChlbGVtZW50KTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgKGVsZW1lbnRzWzBdIGFzIEhUTUxFbGVtZW50KS5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiPGRpdiBjbGFzcz1cIm1vbmEtd2luZG93LWNvbnRlbnQtY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzcz1cIm1vbmEtd2luZG93LXRpdGxlLWJhclwiIG1vbmFXaW5kb3dEcmFnSGFuZGxlciBbZHJhZ2dhYmxlXT1cIndpbmRvd0RhdGEuZHJhZ2dhYmxlXCIgW3dpbmRvd1JlZl09XCJ3aW5kb3dEYXRhLndpbmRvd1JlZmVyZW5jZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9uYS13aW5kb3ctdGl0bGUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1vbmEtd2luZG93LXRpdGxlXCIgKm5nSWY9XCIhd2luZG93RGF0YS50aXRsZVRlbXBsYXRlXCI+e3t3aW5kb3dEYXRhLnRpdGxlID8/ICcnfX08L3NwYW4+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIndpbmRvd0RhdGEudGl0bGVUZW1wbGF0ZVwiICpuZ0lmPVwid2luZG93RGF0YS50aXRsZVRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9uYS13aW5kb3ctdGl0bGUtYmFyLWFjdGlvbnNcIj5cbiAgICAgICAgICAgIDxidXR0b24gbW9uYUJ1dHRvbiBjbGFzcz1cIm1vbmEtd2luZG93LXRpdGxlLWJhci1hY3Rpb25cIiBbZmxhdF09XCJ0cnVlXCIgKGNsaWNrKT1cIm9uQ2xvc2VDbGljaygkZXZlbnQpXCI+XG4gICAgICAgICAgICAgICAgPGZhLWljb24gW2ljb25dPVwiY2xvc2VJY29uXCI+PC9mYS1pY29uPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJtb25hLXdpbmRvdy1jb250ZW50XCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwiJGFueSh3aW5kb3dEYXRhLmNvbnRlbnQpXCIgKm5nSWY9XCJjb250ZW50VHlwZT09PSd0ZW1wbGF0ZSdcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAjY29tcG9uZW50QW5jaG9yICpuZ0lmPVwiY29udGVudFR5cGU9PT0nY29tcG9uZW50J1wiPjwvbmctY29udGFpbmVyPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBtb25hV2luZG93UmVzaXplSGFuZGxlciBbbWluV2lkdGhdPVwid2luZG93RGF0YS5taW5XaWR0aFwiIFttaW5IZWlnaHRdPVwid2luZG93RGF0YS5taW5IZWlnaHRcIlxuICAgICAgICAgW21heFdpZHRoXT1cIndpbmRvd0RhdGEubWF4V2lkdGhcIiBbbWF4SGVpZ2h0XT1cIndpbmRvd0RhdGEubWF4SGVpZ2h0XCJcbiAgICAgICAgIFt3aW5kb3dSZWZdPVwid2luZG93RGF0YS53aW5kb3dSZWZlcmVuY2VcIiBkaXJlY3Rpb249XCJub3J0aFwiIGNsYXNzPVwibW9uYS13aW5kb3ctcmVzaXplciBtb25hLXdpbmRvdy1yZXNpemVyLW5vcnRoXCJcbiAgICAgICAgICpuZ0lmPVwid2luZG93RGF0YS5yZXNpemFibGVcIj48L2Rpdj5cbiAgICA8ZGl2IG1vbmFXaW5kb3dSZXNpemVIYW5kbGVyIFttaW5XaWR0aF09XCJ3aW5kb3dEYXRhLm1pbldpZHRoXCIgW21pbkhlaWdodF09XCJ3aW5kb3dEYXRhLm1pbkhlaWdodFwiXG4gICAgICAgICBbbWF4V2lkdGhdPVwid2luZG93RGF0YS5tYXhXaWR0aFwiIFttYXhIZWlnaHRdPVwid2luZG93RGF0YS5tYXhIZWlnaHRcIlxuICAgICAgICAgW3dpbmRvd1JlZl09XCJ3aW5kb3dEYXRhLndpbmRvd1JlZmVyZW5jZVwiIGRpcmVjdGlvbj1cInNvdXRoXCIgY2xhc3M9XCJtb25hLXdpbmRvdy1yZXNpemVyIG1vbmEtd2luZG93LXJlc2l6ZXItc291dGhcIlxuICAgICAgICAgKm5nSWY9XCJ3aW5kb3dEYXRhLnJlc2l6YWJsZVwiPjwvZGl2PlxuICAgIDxkaXYgbW9uYVdpbmRvd1Jlc2l6ZUhhbmRsZXIgW21pbldpZHRoXT1cIndpbmRvd0RhdGEubWluV2lkdGhcIiBbbWluSGVpZ2h0XT1cIndpbmRvd0RhdGEubWluSGVpZ2h0XCJcbiAgICAgICAgIFttYXhXaWR0aF09XCJ3aW5kb3dEYXRhLm1heFdpZHRoXCIgW21heEhlaWdodF09XCJ3aW5kb3dEYXRhLm1heEhlaWdodFwiXG4gICAgICAgICBbd2luZG93UmVmXT1cIndpbmRvd0RhdGEud2luZG93UmVmZXJlbmNlXCIgZGlyZWN0aW9uPVwiZWFzdFwiIGNsYXNzPVwibW9uYS13aW5kb3ctcmVzaXplciBtb25hLXdpbmRvdy1yZXNpemVyLWVhc3RcIlxuICAgICAgICAgKm5nSWY9XCJ3aW5kb3dEYXRhLnJlc2l6YWJsZVwiPjwvZGl2PlxuICAgIDxkaXYgbW9uYVdpbmRvd1Jlc2l6ZUhhbmRsZXIgW21pbldpZHRoXT1cIndpbmRvd0RhdGEubWluV2lkdGhcIiBbbWluSGVpZ2h0XT1cIndpbmRvd0RhdGEubWluSGVpZ2h0XCJcbiAgICAgICAgIFttYXhXaWR0aF09XCJ3aW5kb3dEYXRhLm1heFdpZHRoXCIgW21heEhlaWdodF09XCJ3aW5kb3dEYXRhLm1heEhlaWdodFwiXG4gICAgICAgICBbd2luZG93UmVmXT1cIndpbmRvd0RhdGEud2luZG93UmVmZXJlbmNlXCIgZGlyZWN0aW9uPVwid2VzdFwiIGNsYXNzPVwibW9uYS13aW5kb3ctcmVzaXplciBtb25hLXdpbmRvdy1yZXNpemVyLXdlc3RcIlxuICAgICAgICAgKm5nSWY9XCJ3aW5kb3dEYXRhLnJlc2l6YWJsZVwiPjwvZGl2PlxuICAgIDxkaXYgbW9uYVdpbmRvd1Jlc2l6ZUhhbmRsZXIgW21pbldpZHRoXT1cIndpbmRvd0RhdGEubWluV2lkdGhcIiBbbWluSGVpZ2h0XT1cIndpbmRvd0RhdGEubWluSGVpZ2h0XCJcbiAgICAgICAgIFttYXhXaWR0aF09XCJ3aW5kb3dEYXRhLm1heFdpZHRoXCIgW21heEhlaWdodF09XCJ3aW5kb3dEYXRhLm1heEhlaWdodFwiXG4gICAgICAgICBbd2luZG93UmVmXT1cIndpbmRvd0RhdGEud2luZG93UmVmZXJlbmNlXCIgZGlyZWN0aW9uPVwibm9ydGhlYXN0XCJcbiAgICAgICAgIGNsYXNzPVwibW9uYS13aW5kb3ctcmVzaXplciBtb25hLXdpbmRvdy1yZXNpemVyLW5vcnRoZWFzdFwiICpuZ0lmPVwid2luZG93RGF0YS5yZXNpemFibGVcIj48L2Rpdj5cbiAgICA8ZGl2IG1vbmFXaW5kb3dSZXNpemVIYW5kbGVyIFttaW5XaWR0aF09XCJ3aW5kb3dEYXRhLm1pbldpZHRoXCIgW21pbkhlaWdodF09XCJ3aW5kb3dEYXRhLm1pbkhlaWdodFwiXG4gICAgICAgICBbbWF4V2lkdGhdPVwid2luZG93RGF0YS5tYXhXaWR0aFwiIFttYXhIZWlnaHRdPVwid2luZG93RGF0YS5tYXhIZWlnaHRcIlxuICAgICAgICAgW3dpbmRvd1JlZl09XCJ3aW5kb3dEYXRhLndpbmRvd1JlZmVyZW5jZVwiIGRpcmVjdGlvbj1cIm5vcnRod2VzdFwiXG4gICAgICAgICBjbGFzcz1cIm1vbmEtd2luZG93LXJlc2l6ZXIgbW9uYS13aW5kb3ctcmVzaXplci1ub3J0aHdlc3RcIiAqbmdJZj1cIndpbmRvd0RhdGEucmVzaXphYmxlXCI+PC9kaXY+XG4gICAgPGRpdiBtb25hV2luZG93UmVzaXplSGFuZGxlciBbbWluV2lkdGhdPVwid2luZG93RGF0YS5taW5XaWR0aFwiIFttaW5IZWlnaHRdPVwid2luZG93RGF0YS5taW5IZWlnaHRcIlxuICAgICAgICAgW21heFdpZHRoXT1cIndpbmRvd0RhdGEubWF4V2lkdGhcIiBbbWF4SGVpZ2h0XT1cIndpbmRvd0RhdGEubWF4SGVpZ2h0XCJcbiAgICAgICAgIFt3aW5kb3dSZWZdPVwid2luZG93RGF0YS53aW5kb3dSZWZlcmVuY2VcIiBkaXJlY3Rpb249XCJzb3V0aGVhc3RcIlxuICAgICAgICAgY2xhc3M9XCJtb25hLXdpbmRvdy1yZXNpemVyIG1vbmEtd2luZG93LXJlc2l6ZXItc291dGhlYXN0XCIgKm5nSWY9XCJ3aW5kb3dEYXRhLnJlc2l6YWJsZVwiPjwvZGl2PlxuICAgIDxkaXYgbW9uYVdpbmRvd1Jlc2l6ZUhhbmRsZXIgW21pbldpZHRoXT1cIndpbmRvd0RhdGEubWluV2lkdGhcIiBbbWluSGVpZ2h0XT1cIndpbmRvd0RhdGEubWluSGVpZ2h0XCJcbiAgICAgICAgIFttYXhXaWR0aF09XCJ3aW5kb3dEYXRhLm1heFdpZHRoXCIgW21heEhlaWdodF09XCJ3aW5kb3dEYXRhLm1heEhlaWdodFwiXG4gICAgICAgICBbd2luZG93UmVmXT1cIndpbmRvd0RhdGEud2luZG93UmVmZXJlbmNlXCIgZGlyZWN0aW9uPVwic291dGh3ZXN0XCJcbiAgICAgICAgIGNsYXNzPVwibW9uYS13aW5kb3ctcmVzaXplciBtb25hLXdpbmRvdy1yZXNpemVyLXNvdXRod2VzdFwiICpuZ0lmPVwid2luZG93RGF0YS5yZXNpemFibGVcIj48L2Rpdj5cblxuPC9kaXY+XG4iXX0=