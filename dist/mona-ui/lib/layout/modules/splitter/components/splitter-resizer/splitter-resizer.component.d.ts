import { ElementRef, OnChanges, OnInit, QueryList, SimpleChanges } from "@angular/core";
import { SplitterPaneComponent } from "../splitter-pane/splitter-pane.component";
import { Orientation } from "../../data/Orientation";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import * as i0 from "@angular/core";
export declare class SplitterResizerComponent implements OnInit, OnChanges {
    private readonly elementRef;
    readonly horizontalCollapseNextIcon: IconDefinition;
    readonly horizontalCollapsePreviousIcon: IconDefinition;
    readonly horizontalResizeIcon: IconDefinition;
    readonly verticalCollapseNextIcon: IconDefinition;
    readonly verticalCollapsePreviousIcon: IconDefinition;
    readonly verticalResizeIcon: IconDefinition;
    resizing: boolean;
    nextPane: SplitterPaneComponent;
    nextResizer: SplitterResizerComponent | null;
    orientation: Orientation;
    previousPane: SplitterPaneComponent;
    panes: QueryList<SplitterPaneComponent>;
    previousResizer: SplitterResizerComponent | null;
    constructor(elementRef: ElementRef<HTMLElement>);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    toggle(position: "previous" | "next"): void;
    private getPaneElements;
    private resize;
    private setSubscriptions;
    static ɵfac: i0.ɵɵFactoryDeclaration<SplitterResizerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SplitterResizerComponent, "mona-splitter-resizer", never, { "nextResizer": { "alias": "nextResizer"; "required": false; }; "orientation": { "alias": "orientation"; "required": false; }; "previousPane": { "alias": "previousPane"; "required": false; }; "panes": { "alias": "panes"; "required": false; }; "previousResizer": { "alias": "previousResizer"; "required": false; }; }, {}, never, never, false, never>;
}
