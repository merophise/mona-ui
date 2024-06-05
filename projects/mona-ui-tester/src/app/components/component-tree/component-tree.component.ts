import { animate, style, transition, trigger } from "@angular/animations";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import {
    TextBoxComponent,
    TextBoxPrefixTemplateDirective,
    TreeViewComponent,
    TreeViewExpandableDirective,
    TreeViewNodeTemplateDirective
} from "mona-ui";
import { Category } from "../../data/ComponentTreeDataItem";

@Component({
    selector: "app-component-tree",
    standalone: true,
    imports: [
        TreeViewComponent,
        TreeViewExpandableDirective,
        TreeViewNodeTemplateDirective,
        TextBoxComponent,
        TextBoxPrefixTemplateDirective
    ],
    templateUrl: "./component-tree.component.html",
    styleUrl: "./component-tree.component.scss",
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger("menuExpand", [
            transition(":enter", [
                style({ height: "0px", opacity: 0 }),
                animate("0.15s ease-out", style({ height: "*", opacity: 1 }))
            ]),
            transition(":leave", [animate("0.15s ease-out", style({ height: "0px", opacity: 0 }))])
        ])
    ]
})
export class ComponentTreeComponent {
    protected readonly menuData: Category[] = [
        {
            name: "Buttons",
            open: false,
            widgets: [
                {
                    name: "Button",
                    path: "button"
                },
                {
                    name: "ButtonGroup",
                    path: "button-group"
                }
            ]
        },
        {
            name: "Date Inputs",
            open: false,
            widgets: [
                {
                    name: "Calendar",
                    path: "calendar"
                },
                {
                    name: "DatePicker",
                    path: "date-picker"
                }
            ]
        },
        {
            name: "Dropdowns",
            open: false,
            widgets: [
                {
                    name: "Auto Complete",
                    path: "auto-complete"
                },
                {
                    name: "Dropdown List",
                    path: "dropdown-list"
                }
            ]
        },
        {
            name: "Editor",
            open: false,
            widgets: []
        }
    ];

    public onCategoryToggle(category: Category): void {
        category.open = !category.open;
    }
}
