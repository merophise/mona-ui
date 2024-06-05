import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ButtonDirective } from "mona-ui";

@Component({
    selector: "app-button-demo",
    standalone: true,
    imports: [ButtonDirective],
    templateUrl: "./button-demo.component.html",
    styleUrl: "./button-demo.component.scss",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonDemoComponent {}
