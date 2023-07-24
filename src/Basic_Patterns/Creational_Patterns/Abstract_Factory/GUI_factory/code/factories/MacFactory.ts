import {GUIFactory} from "./GUIFactory";
import {Button} from "../products/interfaces/Button";
import {MacButton} from "../products/concrete_products/MacButton";
import {Checkbox} from "../products/interfaces/Checkbox";
import {MacCheckbox} from "../products/concrete_products/MacCheckbox";

class MacFactory implements GUIFactory {
    public createButton(): Button {
        return new MacButton();
    }

    public createCheckbox(): Checkbox {
        return new MacCheckbox();
    }
}

export { MacFactory };