import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NumericTextBoxComponent } from "./components/numeric-text-box/numeric-text-box.component";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [NumericTextBoxComponent],
    imports: [CommonModule, FormsModule],
    exports: [NumericTextBoxComponent]
})
export class NumericTextBoxModule {}
