import {Button} from "../products/Button";

/** This class would act as the abstract base Creator class */
abstract class Dialog {
    protected abstract createButton(): Button;

    public render(): void {
        const okButton: Button = this.createButton();
        okButton.onClick(this.closeDialog);
        okButton.render();
    }

    public closeDialog(): void {
        console.log("It should close the Dialog when the button the click event is triggered.")
    }
}

export { Dialog };