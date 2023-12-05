import {Button} from "src/Basic_Patterns/Creational_Patterns/Factory_Method/cross-platform_ui/code/products/Button";

/** This class would act as the abstract base Creator class */
abstract class Dialog {
    public abstract createButton(): Button;

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