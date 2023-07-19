import {Button} from "./Button";

/** Concrete Product */
class RoundButton implements Button {
    public render(): void {
        console.log('Rendering a round button...');
    }
}

export { RoundButton };