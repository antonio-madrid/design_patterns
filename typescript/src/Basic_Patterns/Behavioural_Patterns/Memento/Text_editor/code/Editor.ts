import {Snapshot} from "src/Basic_Patterns/Behavioural_Patterns/Memento/Text_editor/code/Snapshot";

/** Originator */
class Editor {
    private text: string = "";
    private curX: number = 0;
    private curY: number = 0;
    private selectionWidth: number = 0;

    setText(text: string) {
        this.text = text;
    }

    setCursor(x: number, y: number) {
        this.curX = x;
        this.curY = y;
    }

    setSelectionWidth(width: number) {
        this.selectionWidth = width;
    }

    createSnapshot(): Snapshot {
        return new Snapshot(this, this.text, this.curX, this.curY, this.selectionWidth);
    }

    public toString() {
        return `Editor State - Text: ${this.text}, Cursor: (${this.curX}, ${this.curY}), SelectionWidth: ${this.selectionWidth}`;
    }
}

export {Editor};