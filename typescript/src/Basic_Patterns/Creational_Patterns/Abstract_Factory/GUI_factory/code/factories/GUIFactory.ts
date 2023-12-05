import {Button} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/GUI_factory/code/products/interfaces/Button";
import {Checkbox} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/GUI_factory/code/products/interfaces/Checkbox";

interface GUIFactory {
    createButton(): Button;
    createCheckbox(): Checkbox;
}

export { GUIFactory };