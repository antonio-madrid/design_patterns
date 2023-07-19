import {Button} from "./Button";

/** Concrete Default Product */
class SquareButton implements Button {
    public render(): void {
        console.log('Rendering a square button...');
    }
}

export { SquareButton };