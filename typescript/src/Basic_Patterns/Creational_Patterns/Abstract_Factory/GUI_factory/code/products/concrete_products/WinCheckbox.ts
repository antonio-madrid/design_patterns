import {Checkbox} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/GUI_factory/code/products/interfaces/Checkbox";

class WinCheckbox implements Checkbox {
    public paint(): void {
        console.log('Render a checkbox in Windows style.');
    }
}

export { WinCheckbox };