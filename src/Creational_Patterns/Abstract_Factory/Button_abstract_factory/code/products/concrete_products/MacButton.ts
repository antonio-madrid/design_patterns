import {Button} from "../interfaces/Button";

class MacButton implements Button {
    public paint(): void {
        console.log('Render a button in macOS style');
    }
}

export { MacButton };