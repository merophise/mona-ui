import { ElementRef, EventEmitter, OnInit, SimpleChanges, TemplateRef } from "@angular/core";
import { AbstractDropDownListComponent } from "../../../../components/abstract-drop-down-list/abstract-drop-down-list.component";
import { PopupListService } from "../../../../services/popup-list.service";
import { PopupService } from "../../../../../popup/services/popup.service";
import { PopupListItem } from "../../../../data/PopupListItem";
import { SelectionMode } from "../../../../../models/SelectionMode";
import { PopupListValueChangeEvent } from "../../../../data/PopupListValueChangeEvent";
import { PopupSettings } from "../../../../../popup/models/PopupSettings";
import { Observable, Subject } from "rxjs";
import { PopupRef } from "../../../../../popup/models/PopupRef";
import { Action } from "../../../../../utils/Action";
import * as i0 from "@angular/core";
export declare class ComboBoxComponent extends AbstractDropDownListComponent implements OnInit {
    protected readonly elementRef: ElementRef<HTMLElement>;
    protected readonly popupListService: PopupListService;
    protected readonly popupService: PopupService;
    protected selectionMode: SelectionMode;
    readonly comboBoxValue$: Subject<string>;
    comboBoxValue: string;
    valuePopupListItem?: PopupListItem;
    allowCustomValue: boolean;
    filterable: boolean;
    groupTemplate?: TemplateRef<any>;
    itemTemplate?: TemplateRef<any>;
    value?: any;
    valueChange: EventEmitter<any | any[]>;
    valueNormalizer: Action<Observable<string>, Observable<any>>;
    constructor(elementRef: ElementRef<HTMLElement>, popupListService: PopupListService, popupService: PopupService);
    clearValue(event: MouseEvent): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    onKeydown(event: KeyboardEvent): void;
    onPopupListValueChange(event: PopupListValueChangeEvent): void;
    open(options?: Partial<PopupSettings>): PopupRef;
    protected updateValue(listItem?: PopupListItem): void;
    private setEventListeners;
    private setSubscriptions;
    static ɵfac: i0.ɵɵFactoryDeclaration<ComboBoxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ComboBoxComponent, "mona-combo-box", never, { "allowCustomValue": { "alias": "allowCustomValue"; "required": false; }; "filterable": { "alias": "filterable"; "required": false; }; "value": { "alias": "value"; "required": false; }; "valueNormalizer": { "alias": "valueNormalizer"; "required": false; }; }, { "valueChange": "valueChange"; }, ["groupTemplate", "itemTemplate"], never, false, never>;
}
