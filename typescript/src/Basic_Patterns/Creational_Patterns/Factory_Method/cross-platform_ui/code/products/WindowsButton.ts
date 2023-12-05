import {Button} from "src/Basic_Patterns/Creational_Patterns/Factory_Method/cross-platform_ui/code/products/Button";

/** This class would act as a Concrete Product */
class WindowsButton implements Button {
    public render(): void {
        console.log("It should be rendering a Windows's style button");
    }

    public onClick(f: Function): void {
        console.log("It should link a click event to the button.")
        f();
    }
}

export { WindowsButton };