import {Button} from "src/Basic_Patterns/Creational_Patterns/Factory_Method/round_buttons/code/products/Button";

/** Concrete Default Product */
class SquareButton implements Button {
    public render(): void {
        console.log('Rendering a square button...');
    }
}

export { SquareButton };