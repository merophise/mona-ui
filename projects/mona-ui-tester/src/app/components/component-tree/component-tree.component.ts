import { animate, style, transition, trigger } from "@angular/animations";
import { ChangeDetectionStrategy, Component, effect, inject, Input, input } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { Router, RouterLink } from "@angular/router";
import {
    TextBoxComponent,
    TextBoxPrefixTemplateDirective,
    TreeViewComponent,
    TreeViewExpandableDirective,
    TreeViewNodeTemplateDirective
} from "mona-ui";
import { map } from "rxjs";
import { Category } from "../../data/ComponentTreeDataItem";

@Component({
    selector: "app-component-tree",
    standalone: true,
    imports: [
        TreeViewComponent,
        TreeViewExpandableDirective,
        TreeViewNodeTemplateDirective,
        TextBoxComponent,
        TextBoxPrefixTemplateDirective,
        RouterLink
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
    readonly #router = inject(Router);
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
    protected readonly routePath = toSignal(this.#router.events.pipe(map(() => this.#router.url.substring(1))), {
        initialValue: ""
    });

    public constructor() {
        effect(() => {
            this.openParentOfPath(this.routePath());
        });
    }

    public onCategoryToggle(category: Category): void {
        category.open = !category.open;
    }

    private openParentOfPath(path: string): void {
        for (const category of this.menuData) {
            for (const widget of category.widgets) {
                if (widget.path === path) {
                    category.open = true;
                    return;
                }
            }
        }
    }
}
