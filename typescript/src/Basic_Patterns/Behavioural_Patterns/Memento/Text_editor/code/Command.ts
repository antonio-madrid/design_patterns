import {Editor} from "src/Basic_Patterns/Behavioural_Patterns/Memento/Text_editor/code/Editor";
import {Snapshot} from "src/Basic_Patterns/Behavioural_Patterns/Memento/Text_editor/code/Snapshot";

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

export {Command};