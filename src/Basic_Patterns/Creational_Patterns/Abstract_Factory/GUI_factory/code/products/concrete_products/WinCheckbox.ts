import {Checkbox} from "../interfaces/Checkbox";

class WinCheckbox implements Checkbox {
    public paint(): void {
        console.log('Render a checkbox in Windows style.');
    }
}

export { WinCheckbox };