import { Directive } from "@angular/core";
import { ListGroupTemplateDirective } from "../../../directives/list-group-template.directive";

@Directive({
    selector: "ng-template[monaDropDownListGroupTemplate]",
    standalone: true
})
export class DropDownListGroupTemplateDirective extends ListGroupTemplateDirective {
    public constructor() {
        super();
    }
}
