import {GUIFactory} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/GUI_factory/code/factories/GUIFactory";
import {Button} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/GUI_factory/code/products/interfaces/Button";
import {WinButton} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/GUI_factory/code/products/concrete_products/WinButton";
import {Checkbox} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/GUI_factory/code/products/interfaces/Checkbox";
import {WinCheckbox} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/GUI_factory/code/products/concrete_products/WinCheckbox";

class WinFactory implements GUIFactory {
    public createButton(): Button {
        return new WinButton();
    }

    public createCheckbox(): Checkbox {
        return new WinCheckbox();
    }
}

export { WinFactory };