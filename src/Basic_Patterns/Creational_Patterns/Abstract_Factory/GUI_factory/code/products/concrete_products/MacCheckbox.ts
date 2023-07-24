import {Checkbox} from "../interfaces/Checkbox";

class MacCheckbox implements Checkbox {
    public paint(): void {
        console.log('Render a checkbox in macOS style.');
    }
}

export { MacCheckbox };