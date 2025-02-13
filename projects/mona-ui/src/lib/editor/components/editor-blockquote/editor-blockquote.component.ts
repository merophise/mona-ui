import { ChangeDetectionStrategy, Component, computed, inject } from "@angular/core";
import { ButtonDirective } from "../../../buttons/button/button.directive";
import { EditorService } from "../../services/editor.service";

@Component({
    selector: "mona-editor-blockquote",
    imports: [ButtonDirective],
    templateUrl: "./editor-blockquote.component.html",
    styleUrl: "./editor-blockquote.component.scss",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditorBlockquoteComponent {
    readonly #editorService: EditorService = inject(EditorService);
    protected readonly blockquoteSelected = computed(() => {
        this.#editorService.state();
        return this.#editorService.editor.isActive("blockquote");
    });

    public onBlockquoteToggle(): void {
        if (this.blockquoteSelected()) {
            this.#editorService.editor.chain().focus().unsetBlockquote().run();
        } else {
            this.#editorService.editor.chain().focus().setBlockquote().run();
        }
    }
}
