import {Button} from "../interfaces/Button";

class WinButton implements Button {
    public paint(): void {
        console.log('Render a button in Windows style');
    }
}

export { WinButton };