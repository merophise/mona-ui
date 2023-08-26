import { AfterContentInit, Component } from "@angular/core";
import { DialogAction } from "../../models/DialogAction";
import { faCheck, faExclamation, faInfo, faQuestion, faTimes, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { DialogType } from "../../models/DialogType";
import { Subject, take } from "rxjs";
import { DialogResult } from "../../models/DialogResult";
import { DialogRef } from "../../models/DialogRef";
import { DialogHandler } from "../../models/DialogHandler";
import { ButtonDirective } from "../../../buttons/modules/button/directives/button.directive";
import { NumericTextBoxComponent } from "../../../inputs/modules/numeric-text-box/components/numeric-text-box/numeric-text-box.component";
import { FormsModule } from "@angular/forms";
import { TextBoxComponent } from "../../../inputs/modules/text-box/components/text-box/text-box.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NgIf, NgFor, NgClass } from "@angular/common";

@Component({
    templateUrl: "./dialog-content.component.html",
    styleUrls: ["./dialog-content.component.scss"],
    standalone: true,
    imports: [NgIf, FontAwesomeModule, TextBoxComponent, FormsModule, NumericTextBoxComponent, NgFor, ButtonDirective, NgClass]
})
export class DialogContentComponent implements AfterContentInit {
    readonly #dialogResult$: Subject<DialogResult> = new Subject<DialogResult>();
    #dialogRef: DialogRef = {
        result: this.#dialogResult$.asObservable(),
        close: () => {}
    };
    public readonly confirmIcon: IconDefinition = faQuestion;
    public readonly errorIcon: IconDefinition = faTimes;
    public readonly infoIcon: IconDefinition = faInfo;
    public readonly inputIcon: IconDefinition = faQuestion;
    public readonly successIcon: IconDefinition = faCheck;
    public readonly warningIcon: IconDefinition = faExclamation;
    public actions: DialogAction[] = [];
    public dialogHandler?: DialogHandler; // This is set by DialogService
    public inputType: "string" | "number" = "string";
    public text: string = "";
    public title: string = "";
    public type: DialogType = "info";
    public valueNumber: number | null = null;
    public valueString: string = "";

    public ngAfterContentInit(): void {
        this.#dialogRef.close = () => this.dialogHandler?.close();
        if (this.dialogHandler) {
            this.dialogHandler.closed$.pipe(take(1)).subscribe(event => {
                if (event?.viaClose) {
                    this.#dialogResult$.next({
                        viaClose: event?.viaClose
                    });
                }
            });
        }
    }

    public onActionClick(event: MouseEvent, action: DialogAction, value?: string | number | null): void {
        if (action.closeOnClick) {
            this.#dialogRef.close();
        }
        this.#dialogResult$.next({
            action,
            value,
            viaClose: false
        });
    }

    public get dialogRef(): DialogRef {
        return this.#dialogRef;
    }
}
