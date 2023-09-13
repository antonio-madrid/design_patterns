import {Editor} from "./Editor";

/** Memento */
class Snapshot {
    private editor: Editor;
    private text: string;
    private curX: number;
    private curY: number;
    private selectionWidth: number;

    constructor(editor: Editor, text: string, curX: number, curY: number, selectionWidth: number) {
        this.editor = editor;
        this.text = text;
        this.curX = curX;
        this.curY = curY;
        this.selectionWidth = selectionWidth;
    }

    public restore() {
        this.editor.setText(this.text);
        this.editor.setCursor(this.curX, this.curY);
        this.editor.setSelectionWidth(this.selectionWidth);
    }
}

export { Snapshot };