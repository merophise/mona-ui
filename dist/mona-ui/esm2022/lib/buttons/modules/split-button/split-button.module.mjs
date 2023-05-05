import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SplitButtonComponent } from "./components/split-button/split-button.component";
import { PopupModule } from "../../../popup/popup.module";
import { ContextMenuModule } from "../../../menus/modules/context-menu/context-menu.module";
import { ButtonModule } from "../button/button.module";
import { SplitButtonTextTemplateDirective } from "./directives/split-button-text-template.directive";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import * as i0 from "@angular/core";
export class SplitButtonModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: SplitButtonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.0", ngImport: i0, type: SplitButtonModule, declarations: [SplitButtonComponent, SplitButtonTextTemplateDirective], imports: [CommonModule, PopupModule, ContextMenuModule, ButtonModule, FontAwesomeModule], exports: [SplitButtonComponent, SplitButtonTextTemplateDirective] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: SplitButtonModule, imports: [CommonModule, PopupModule, ContextMenuModule, ButtonModule, FontAwesomeModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: SplitButtonModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [SplitButtonComponent, SplitButtonTextTemplateDirective],
                    imports: [CommonModule, PopupModule, ContextMenuModule, ButtonModule, FontAwesomeModule],
                    exports: [SplitButtonComponent, SplitButtonTextTemplateDirective]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsaXQtYnV0dG9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21vbmEtdWkvc3JjL2xpYi9idXR0b25zL21vZHVsZXMvc3BsaXQtYnV0dG9uL3NwbGl0LWJ1dHRvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDeEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzFELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQzVGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUNyRyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQzs7QUFPbkUsTUFBTSxPQUFPLGlCQUFpQjs4R0FBakIsaUJBQWlCOytHQUFqQixpQkFBaUIsaUJBSlgsb0JBQW9CLEVBQUUsZ0NBQWdDLGFBQzNELFlBQVksRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixhQUM3RSxvQkFBb0IsRUFBRSxnQ0FBZ0M7K0dBRXZELGlCQUFpQixZQUhoQixZQUFZLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLFlBQVksRUFBRSxpQkFBaUI7OzJGQUc5RSxpQkFBaUI7a0JBTDdCLFFBQVE7bUJBQUM7b0JBQ04sWUFBWSxFQUFFLENBQUMsb0JBQW9CLEVBQUUsZ0NBQWdDLENBQUM7b0JBQ3RFLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixDQUFDO29CQUN4RixPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxnQ0FBZ0MsQ0FBQztpQkFDcEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBTcGxpdEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvc3BsaXQtYnV0dG9uL3NwbGl0LWJ1dHRvbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IFBvcHVwTW9kdWxlIH0gZnJvbSBcIi4uLy4uLy4uL3BvcHVwL3BvcHVwLm1vZHVsZVwiO1xuaW1wb3J0IHsgQ29udGV4dE1lbnVNb2R1bGUgfSBmcm9tIFwiLi4vLi4vLi4vbWVudXMvbW9kdWxlcy9jb250ZXh0LW1lbnUvY29udGV4dC1tZW51Lm1vZHVsZVwiO1xuaW1wb3J0IHsgQnV0dG9uTW9kdWxlIH0gZnJvbSBcIi4uL2J1dHRvbi9idXR0b24ubW9kdWxlXCI7XG5pbXBvcnQgeyBTcGxpdEJ1dHRvblRleHRUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gXCIuL2RpcmVjdGl2ZXMvc3BsaXQtYnV0dG9uLXRleHQtdGVtcGxhdGUuZGlyZWN0aXZlXCI7XG5pbXBvcnQge0ZvbnRBd2Vzb21lTW9kdWxlfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2FuZ3VsYXItZm9udGF3ZXNvbWVcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtTcGxpdEJ1dHRvbkNvbXBvbmVudCwgU3BsaXRCdXR0b25UZXh0VGVtcGxhdGVEaXJlY3RpdmVdLFxuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFBvcHVwTW9kdWxlLCBDb250ZXh0TWVudU1vZHVsZSwgQnV0dG9uTW9kdWxlLCBGb250QXdlc29tZU1vZHVsZV0sXG4gICAgZXhwb3J0czogW1NwbGl0QnV0dG9uQ29tcG9uZW50LCBTcGxpdEJ1dHRvblRleHRUZW1wbGF0ZURpcmVjdGl2ZV1cbn0pXG5leHBvcnQgY2xhc3MgU3BsaXRCdXR0b25Nb2R1bGUge31cbiJdfQ==