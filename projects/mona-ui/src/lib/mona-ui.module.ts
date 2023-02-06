import { NgModule } from "@angular/core";
import { ButtonsModule } from "./buttons/buttons.module";
import { PopupModule } from "./popup/popup.module";
import { MenusModule } from "./menus/menus.module";
import { DropDownsModule } from "./dropdowns/drop-downs.module";
import { InputsModule } from "./inputs/inputs.module";
import { TreeViewModule } from "./tree-view/tree-view.module";
import { LayoutModule } from "./layout/layout.module";
import { DateInputsModule } from "./date-inputs/date-inputs.module";
import { TooltipsModule } from "./tooltips/tooltips.module";
import { WindowModule } from "./window/window.module";

@NgModule({
    exports: [
        ButtonsModule,
        DateInputsModule,
        DropDownsModule,
        InputsModule,
        LayoutModule,
        MenusModule,
        PopupModule,
        TooltipsModule,
        TreeViewModule,
        WindowModule
    ]
})
export class MonaUiModule {}
