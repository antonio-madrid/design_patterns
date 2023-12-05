import {Checkbox} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/GUI_factory/code/products/interfaces/Checkbox";

class MacCheckbox implements Checkbox {
    public paint(): void {
        console.log('Render a checkbox in macOS style.');
    }
}

export { MacCheckbox };