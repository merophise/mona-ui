import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { SplitterComponent, SplitterPaneComponent } from "mona-ui";
import { ComponentTreeComponent } from "./components/component-tree/component-tree.component";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [SplitterComponent, SplitterPaneComponent, ComponentTreeComponent]
})
export class AppComponent implements OnInit {
    public ngOnInit(): void {}
}
