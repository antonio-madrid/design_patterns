import {GUIFactory} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/GUI_factory/code/factories/GUIFactory";
import {Button} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/GUI_factory/code/products/interfaces/Button";
import {MacButton} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/GUI_factory/code/products/concrete_products/MacButton";
import {Checkbox} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/GUI_factory/code/products/interfaces/Checkbox";
import {MacCheckbox} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/GUI_factory/code/products/concrete_products/MacCheckbox";

class MacFactory implements GUIFactory {
    public createButton(): Button {
        return new MacButton();
    }

    public createCheckbox(): Checkbox {
        return new MacCheckbox();
    }
}

export { MacFactory };