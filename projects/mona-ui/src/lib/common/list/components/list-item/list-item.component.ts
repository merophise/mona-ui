import { NgClass, NgTemplateOutlet } from "@angular/common";
import { Component, computed, Input, signal, Signal, TemplateRef, WritableSignal } from "@angular/core";
import { ListItem } from "../../models/ListItem";
import { ListItemTemplateContext } from "../../models/ListItemTemplateContext";
import { ListService } from "../../services/list.service";

@Component({
    selector: "mona-list-item",
    standalone: true,
    imports: [NgClass, NgTemplateOutlet],
    templateUrl: "./list-item.component.html",
    styleUrl: "./list-item.component.scss"
})
export class ListItemComponent<T> {
    readonly #item: WritableSignal<ListItem<T> | null> = signal(null);
    protected readonly dataItem: Signal<T | null> = computed(() => this.#item()?.data ?? null);
    protected readonly itemTemplate: WritableSignal<TemplateRef<ListItemTemplateContext<T>> | null> = signal(null);
    protected readonly itemText: Signal<string> = computed(() => {
        const item = this.#item();
        if (item == null) {
            return "";
        }
        if (item.header) {
            return item.header;
        }
        return this.listService.getItemText(item);
    });

    @Input({ required: true })
    public set item(value: ListItem<T>) {
        this.#item.set(value);
    }

    @Input()
    public set template(template: TemplateRef<ListItemTemplateContext<T>> | null) {
        this.itemTemplate.set(template);
    }

    public constructor(protected readonly listService: ListService) {}
}
