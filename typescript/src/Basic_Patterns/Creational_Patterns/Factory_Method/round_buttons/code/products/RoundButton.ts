import {Button} from "src/Basic_Patterns/Creational_Patterns/Factory_Method/round_buttons/code/products/Button";

/** Concrete Product */
class RoundButton implements Button {
    public render(): void {
        console.log('Rendering a round button...');
    }
}

export { RoundButton };