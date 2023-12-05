import {
    Container
} from "src/Basic_Patterns/Behavioural_Patterns/Chain_of_Responsibility/GUI_help_system/code/chain/Container";

/** Concrete Handler */
class Panel extends Container {
    private modalHelpText?: string;

    public setHelpModalText(text: string): void {
        this.modalHelpText = text;
    }

    public showHelp() {
        if (this.modalHelpText) {
            console.log(this.modalHelpText);
        } else {
            super.showHelp();
        }
    }
}

export { Panel };