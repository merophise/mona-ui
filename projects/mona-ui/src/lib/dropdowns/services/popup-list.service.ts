import { Injectable } from "@angular/core";
import { Enumerable, Group, List } from "@mirei/ts-collections";
import { PopupListItem } from "../data/PopupListItem";
import { SelectionMode } from "../../models/SelectionMode";
import { ItemDisabler, ItemDisablerAction } from "../data/ItemDisabler";
import { Subject } from "rxjs";

@Injectable()
export class PopupListService {
    public readonly scrollToListItem$: Subject<PopupListItem> = new Subject<PopupListItem>();
    public filterModeActive: boolean = false;
    public sourceListData: List<Group<string, PopupListItem>> = new List<Group<string, PopupListItem>>();
    public viewListData: List<Group<string, PopupListItem>> = new List<Group<string, PopupListItem>>();

    public constructor() {}

    public static findFirstSelectedItem(items: List<Group<string, PopupListItem>>): PopupListItem | null {
        return items.selectMany(g => g.source).firstOrDefault(i => i.selected);
    }

    public static findLastSelectedItem(items: List<Group<string, PopupListItem>>): PopupListItem | null {
        return items.selectMany(g => g.source).lastOrDefault(i => i.selected);
    }

    public static findNextSelectableItem(
        items: List<Group<string, PopupListItem>>,
        item: PopupListItem
    ): PopupListItem | null {
        return (
            items
                .selectMany(g => g.source)
                .skipWhile(i => !i.dataEquals(item.data))
                .skip(1)
                .firstOrDefault(i => !i.disabled) ?? null
        );
    }

    public static findPreviousSelectableItem(
        items: List<Group<string, PopupListItem>>,
        item: PopupListItem
    ): PopupListItem | null {
        return (
            items
                .selectMany(g => g.source)
                .reverse()
                .skipWhile(i => !i.dataEquals(item.data))
                .skip(1)
                .firstOrDefault(i => !i.disabled) ?? null
        );
    }

    public static getItemDisablerAction(disabler: ItemDisabler): ItemDisablerAction {
        if (typeof disabler === "string") {
            return (item: any) => !!item?.[disabler] ?? false;
        }
        return disabler;
    }

    public static isFirstSelectableItem(items: List<Group<string, PopupListItem>>, item: PopupListItem): boolean {
        return PopupListService.findPreviousSelectableItem(items, item) === null;
    }

    public static isLastSelectableItem(items: List<Group<string, PopupListItem>>, item: PopupListItem): boolean {
        return PopupListService.findNextSelectableItem(items, item) === null;
    }

    public clearFilters(): void {
        this.viewListData = this.sourceListData.toList();
        this.viewListData.selectMany(g => g.source).forEach(i => (i.highlighted = false));
        this.filterModeActive = false;
    }

    public filterItems(filter: string): void {
        if (!filter) {
            this.clearFilters();
            return;
        }
        this.viewListData = this.sourceListData
            .select(g => {
                const filteredItems = g.source.where(i => i.text.toLowerCase().includes(filter.toLowerCase()));
                return new Group<string, PopupListItem>(g.key, filteredItems.toList());
            })
            .toList();
        const selectedItem = this.viewListData
            .selectMany(g => g.source)
            .where(i => i.selected)
            .firstOrDefault();
        if (selectedItem) {
            selectedItem.highlighted = true;
        } else {
            const firstItem = this.viewListData
                .selectMany(g => g.source)
                .where(i => !i.disabled)
                .firstOrDefault();
            if (firstItem) {
                firstItem.highlighted = true;
            }
        }
        this.filterModeActive = true;
    }

    public initializeListData(params: {
        data: Iterable<any>;
        disabler?: ItemDisabler;
        textField?: string;
        valueField?: string;
        groupField?: string;
    }): List<Group<string, any>> {
        let listItems: List<Group<string, PopupListItem>> = new List<Group<string, PopupListItem>>();
        const createListItem = (item: any): PopupListItem => {
            return new PopupListItem({
                data: item,
                text: params.textField ? item[params.textField] : item,
                textField: params.textField,
                value: params.valueField ? item[params.valueField] : params.valueField,
                valueField: params.valueField
            });
        };
        if (params.groupField) {
            listItems = Enumerable.from(params.data)
                .groupBy(d => d[params.groupField as string])
                .select(g => new Group<string, any>(g.key, g.select(d => createListItem(d)).toList()))
                .orderBy(g => g.key)
                .toList();
        } else {
            const items = Enumerable.from(params.data)
                .select(d => createListItem(d))
                .toList();
            listItems.add(new Group<string, any>("", items));
        }

        this.sourceListData = listItems;
        this.viewListData = this.sourceListData.toList();

        if (params.disabler) {
            const disablerAction = PopupListService.getItemDisablerAction(params.disabler);
            this.updateDisabledItems(disablerAction);
        }

        return listItems;
    }

    public navigate(event: KeyboardEvent, selectionMode: SelectionMode): PopupListItem | null {
        const selectedItem = this.viewListData.selectMany(g => g.source).firstOrDefault(i => i.selected);
        const highlightedItem = this.viewListData.selectMany(g => g.source).firstOrDefault(i => i.highlighted);
        const firstItem = this.viewListData.selectMany(g => g.source).firstOrDefault(i => !i.disabled);
        const focusedItem = highlightedItem ?? selectedItem ?? null;
        let newItem: PopupListItem | null = null;
        if (event.key === "ArrowDown") {
            event.preventDefault();
            if (focusedItem && PopupListService.isLastSelectableItem(this.viewListData, focusedItem)) {
                if (this.filterModeActive && focusedItem.highlighted && !focusedItem.selected) {
                    focusedItem.highlighted = false;
                    focusedItem.selected = true;
                }
                return focusedItem;
            }
            const nextItem = !focusedItem
                ? firstItem
                : PopupListService.findNextSelectableItem(this.viewListData, focusedItem);
            if (nextItem) {
                if (selectionMode === "single") {
                    if (this.filterModeActive) {
                        if (focusedItem && focusedItem.highlighted && !focusedItem.selected) {
                            focusedItem.highlighted = false;
                            focusedItem.selected = true;
                            newItem = focusedItem;
                            return newItem;
                        } else {
                            if (focusedItem) {
                                focusedItem.selected = false;
                                focusedItem.highlighted = false;
                                nextItem.selected = true;
                            }
                        }
                    } else {
                        if (focusedItem) {
                            if (focusedItem.highlighted && !focusedItem.selected) {
                                focusedItem.highlighted = false;
                                focusedItem.selected = true;
                                newItem = focusedItem;
                                return newItem;
                            } else {
                                focusedItem.selected = false;
                                focusedItem.highlighted = false;
                            }
                        }
                        nextItem.selected = true;
                    }
                } else {
                    nextItem.highlighted = true;
                    if (focusedItem) {
                        focusedItem.highlighted = false;
                    }
                }
                newItem = nextItem;
            }
        } else if (event.key === "ArrowUp") {
            event.preventDefault();
            if (focusedItem) {
                if (PopupListService.isFirstSelectableItem(this.viewListData, focusedItem)) {
                    return focusedItem;
                }
                const previousItem = PopupListService.findPreviousSelectableItem(this.viewListData, focusedItem);
                if (previousItem) {
                    if (selectionMode === "single") {
                        if (this.filterModeActive) {
                            if (focusedItem.highlighted && !focusedItem.selected) {
                                focusedItem.highlighted = false;
                                focusedItem.selected = true;
                                newItem = focusedItem;
                                return newItem;
                            } else {
                                focusedItem.selected = false;
                                focusedItem.highlighted = false;
                                previousItem.selected = true;
                            }
                        } else {
                            if (focusedItem.highlighted && !focusedItem.selected) {
                                focusedItem.highlighted = false;
                                focusedItem.selected = true;
                                newItem = focusedItem;
                                return newItem;
                            } else {
                                focusedItem.selected = false;
                                previousItem.selected = true;
                            }
                        }
                    } else {
                        focusedItem.highlighted = false;
                        previousItem.highlighted = true;
                    }
                    newItem = previousItem;
                }
            }
        }
        return newItem;
    }

    public selectItem(item: PopupListItem, selectionMode: SelectionMode): void {
        if (selectionMode === "single") {
            this.viewListData.selectMany(g => g.source).forEach(i => (i.selected = false));
            item.selected = true;
        } else {
            item.selected = !item.selected;
        }
    }

    private updateDisabledItems(disablerAction: ItemDisablerAction): void {
        this.sourceListData.selectMany(g => g.source).forEach(i => (i.disabled = disablerAction(i.data)));
    }
}
