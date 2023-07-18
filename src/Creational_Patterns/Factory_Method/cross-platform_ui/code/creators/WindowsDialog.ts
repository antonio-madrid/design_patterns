import {Dialog} from "./Dialog";
import {Button} from "../products/Button";
import {WindowsButton} from "../products/WindowsButton";

/** This would act as a Concrete Creator subclass */
class WindowsDialog extends Dialog {
    public createButton(): Button {
        return new WindowsButton();
    }
}

export { WindowsDialog };