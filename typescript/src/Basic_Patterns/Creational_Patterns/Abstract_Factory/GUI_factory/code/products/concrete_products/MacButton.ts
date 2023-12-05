import {Button} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/GUI_factory/code/products/interfaces/Button";

class MacButton implements Button {
    public paint(): void {
        console.log('Render a button in macOS style');
    }
}

export { MacButton };