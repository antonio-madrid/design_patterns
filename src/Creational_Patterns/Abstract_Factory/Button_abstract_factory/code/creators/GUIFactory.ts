import {Button} from "../products/interfaces/Button";
import {Checkbox} from "../products/interfaces/Checkbox";

interface GUIFactory {
    createButton(): Button;
    createCheckbox(): Checkbox;
}

export { GUIFactory };