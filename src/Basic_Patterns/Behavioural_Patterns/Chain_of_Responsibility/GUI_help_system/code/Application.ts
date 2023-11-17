import {Dialog} from "src/Basic_Patterns/Behavioural_Patterns/Chain_of_Responsibility/GUI_help_system/code/chain/concrete_handlers/Dialog";
import {Panel} from "src/Basic_Patterns/Behavioural_Patterns/Chain_of_Responsibility/GUI_help_system/code/chain/concrete_handlers/Panel";
import {Button} from "src/Basic_Patterns/Behavioural_Patterns/Chain_of_Responsibility/GUI_help_system/code/chain/concrete_handlers/Button";

class Application {
    private dialog?: Dialog;

    constructor() {
        this.createUI();
    }

    private createUI(): void {
        this.dialog = new Dialog();
        this.dialog.setWikiPageUrl('http://...');

        const panel = new Panel();
        panel.setHelpModalText('This panel does...');

        const ok = new Button();
        ok.tooltipText = 'This is an OK button that...';
        const cancel = new Button();

        panel.add(ok);
        panel.add(cancel);
        this.dialog.add(panel);
    }

    public onF1KeyPress(): void {
        if (this.dialog) {
            this.dialog.showHelp();
        }
    }
}

export { Application };