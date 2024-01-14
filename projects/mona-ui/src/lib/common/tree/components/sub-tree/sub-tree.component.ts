import { animate, style, transition, trigger } from "@angular/animations";
import {
    CdkDrag,
    CdkDragDrop,
    CdkDragEnd,
    CdkDragMove,
    CdkDragPreview,
    CdkDragStart,
    CdkDropList
} from "@angular/cdk/drag-drop";
import { AsyncPipe, NgStyle } from "@angular/common";
import { Component, computed, Input, Signal, signal, WritableSignal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import {
    faArrowDown,
    faArrowUp,
    faBan,
    faCaretDown,
    faCaretRight,
    faPlus,
    IconDefinition
} from "@fortawesome/free-solid-svg-icons";
import { ImmutableSet } from "@mirei/ts-collections";
import { take } from "rxjs";
import { CheckBoxDirective } from "../../../../inputs/check-box/check-box.directive";
import { NodeDragEndEvent } from "../../models/NodeDragEndEvent";
import { NodeDragStartEvent } from "../../models/NodeDragStartEvent";
import { NodeDropEvent } from "../../models/NodeDropEvent";
import { TreeNode } from "../../models/TreeNode";
import { TreeService } from "../../services/tree.service";
import { TreeNodeComponent } from "../tree-node/tree-node.component";

@Component({
    selector: "mona-sub-tree",
    standalone: true,
    imports: [
        TreeNodeComponent,
        FaIconComponent,
        NgStyle,
        CheckBoxDirective,
        FormsModule,
        CdkDropList,
        CdkDrag,
        CdkDragPreview,
        AsyncPipe
    ],
    templateUrl: "./sub-tree.component.html",
    styleUrl: "./sub-tree.component.scss",
    animations: [
        trigger("nodeExpand", [
            transition(":enter", [
                style({ height: "0px", opacity: 0 }),
                animate("0.15s ease-out", style({ height: "*", opacity: 1 }))
            ]),
            transition(":leave", [animate("0.15s ease-out", style({ height: "0px", opacity: 0 }))])
        ])
    ]
})
export class SubTreeComponent<T> {
    protected readonly collapsedIcon: IconDefinition = faCaretRight;
    protected readonly dropAfterIcon: IconDefinition = faArrowDown;
    protected readonly dropBeforeIcon: IconDefinition = faArrowUp;
    protected readonly dropInsideIcon: IconDefinition = faPlus;
    protected readonly dropNotAllowIcon: IconDefinition = faBan;
    protected readonly expandedIcon: IconDefinition = faCaretDown;
    protected readonly nodeSet: WritableSignal<ImmutableSet<TreeNode<T>>> = signal(ImmutableSet.create());
    protected readonly paddingLeft: Signal<number> = computed(() => {
        const depth = this.subTreeDepth();
        return depth === 0 ? 0 : 24;
    });
    protected readonly parentNode: WritableSignal<TreeNode<T> | null> = signal(null);
    protected readonly subTreeDepth: WritableSignal<number> = signal(0);

    @Input({ required: true })
    public set depth(depth: number) {
        this.subTreeDepth.set(depth);
    }

    @Input({ required: true })
    public set nodes(nodes: Iterable<TreeNode<T>>) {
        this.nodeSet.set(ImmutableSet.create(nodes));
    }

    @Input({ required: true })
    public set parent(parent: TreeNode<T> | null) {
        this.parentNode.set(parent);
    }

    public constructor(protected readonly treeService: TreeService<T>) {}

    public onExpandStateChange(node: TreeNode<T>, expanded: boolean): void {
        this.treeService.setNodeExpand(node, expanded);
        this.treeService.nodeExpand$.next({ node, expanded });
    }

    public onNodeDragEnd(event: CdkDragEnd<TreeNode<T>>): void {
        const nodeDragEndEvent = new NodeDragEndEvent(event.source.data, event.event);
        this.treeService.nodeDragEnd$.next(nodeDragEndEvent);
        if (nodeDragEndEvent.isDefaultPrevented()) {
            return;
        }
        this.treeService.dragging.set(false);
    }

    public onNodeDragMove(event: CdkDragMove<TreeNode<T>>, node: TreeNode<T>): void {
        if (event.event) {
            const draggedElement = event.source.element.nativeElement.nextSibling as HTMLElement;
            draggedElement.style.top = `${10}px`;
            draggedElement.style.left = `${10}px`;
        }
    }

    public onNodeDragStart(event: CdkDragStart<TreeNode<T>>): void {
        const nodeDragStartEvent = new NodeDragStartEvent(event.source.data, event.event);
        this.treeService.nodeDragStart$.next(nodeDragStartEvent);
        if (nodeDragStartEvent.isDefaultPrevented()) {
            return;
        }
        this.treeService.dragging.set(true);
    }

    public onNodeDrop(event: CdkDragDrop<TreeNode<T>, unknown, TreeNode<T>>): void {
        this.treeService.dropPositionChange$.pipe(take(1)).subscribe(e => {
            const sourceNode = event.item.data;
            const targetNode = e.targetNode;
            if (sourceNode === targetNode || e.position === "outside" || targetNode == null) {
                return;
            }
            const nodeDropEvent = new NodeDropEvent(sourceNode, targetNode, e.position, event.event);
            this.treeService.nodeDrop$.next(nodeDropEvent);
            if (nodeDropEvent.isDefaultPrevented()) {
                return;
            }
            if (e.position === "inside") {
                this.treeService.moveNode(sourceNode, targetNode, "inside");
                console.log("indeterminate", this.treeService.isIndeterminate(targetNode));
            } else if (e.position === "before") {
                this.treeService.moveNode(sourceNode, targetNode, "before");
            } else if (e.position === "after") {
                this.treeService.moveNode(sourceNode, targetNode, "after");
            }
        });
    }
}
