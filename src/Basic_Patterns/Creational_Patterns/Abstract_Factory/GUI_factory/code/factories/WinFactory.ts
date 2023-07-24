import {GUIFactory} from "./GUIFactory";
import {Button} from "../products/interfaces/Button";
import {WinButton} from "../products/concrete_products/WinButton";
import {Checkbox} from "../products/interfaces/Checkbox";
import {WinCheckbox} from "../products/concrete_products/WinCheckbox";

class WinFactory implements GUIFactory {
    public createButton(): Button {
        return new WinButton();
    }

    public createCheckbox(): Checkbox {
        return new WinCheckbox();
    }
}

export { WinFactory };