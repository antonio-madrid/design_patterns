import {Button} from "./Button";

/** This class would act as a Concrete Product */
class HTMLButton implements Button {
    public render(): void {
        console.log("It should render an HTML button.")
    }

    public onClick(f: Function): void {
        console.log("It should link a click event to the button.")
        f();
    }
}

export { HTMLButton };