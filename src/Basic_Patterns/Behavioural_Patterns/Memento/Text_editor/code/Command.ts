import {Editor} from "./Editor";
import {Snapshot} from "./Snapshot";

/** Caretaker */
class Command {
    private backup: Snapshot | null = null;
    private editor: Editor;

    constructor(editor: Editor) {
        this.editor = editor;
    }

    public makeBackup() {
        this.backup = this.editor.createSnapshot();
    }

    public undo() {
        if (this.backup !== null) {
            this.backup.restore();
        }
    }
}

export { Command };