import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Input,
    OnDestroy,
    OnInit,
    Output
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { Subject } from "rxjs";
import { PopupRef } from "../../../popup/models/PopupRef";

@Component({
    standalone: true,
    imports: [CommonModule],
    template: "",
    styleUrls: [],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export abstract class AbstractDateInputComponent implements OnInit, OnDestroy {
    protected readonly componentDestroy$: Subject<void> = new Subject<void>();
    protected popupRef: PopupRef | null = null;
    public navigatedDate: Date = new Date();

    @Input()
    public disabled: boolean = false;

    @Input()
    public disabledDates: Iterable<Date> = [];

    @Input()
    public max: Date | null = null;

    @Input()
    public min: Date | null = null;

    @Input()
    public readonly: boolean = false;

    @Input()
    public value: Date | null = null;

    @Output()
    public valueChange: EventEmitter<Date | null> = new EventEmitter<Date | null>();

    protected constructor(protected readonly cdr: ChangeDetectorRef) {}

    public ngOnDestroy(): void {
        this.componentDestroy$.next();
        this.componentDestroy$.complete();
    }

    public ngOnInit(): void {}
}
