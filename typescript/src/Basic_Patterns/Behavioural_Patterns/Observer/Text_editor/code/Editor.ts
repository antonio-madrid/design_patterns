import {EventManager} from "src/Basic_Patterns/Behavioural_Patterns/Observer/Text_editor/code/subjects/EventManager";

/** Client class */
class Editor {
    public events!: EventManager;
    private file!: string;

    constructor() {
        this.events = new EventManager();
    }

    public openFile(filePath: string): void {
        this.file = filePath;
        this.events.notify("open", filePath);
    }

    public saveFile(): void {
        this.events.notify("save", this.file);
    }
}

export {Editor};