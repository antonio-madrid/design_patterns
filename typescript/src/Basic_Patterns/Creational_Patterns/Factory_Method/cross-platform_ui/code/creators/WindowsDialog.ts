import {Dialog} from "src/Basic_Patterns/Creational_Patterns/Factory_Method/cross-platform_ui/code/creators/Dialog";
import {Button} from "src/Basic_Patterns/Creational_Patterns/Factory_Method/cross-platform_ui/code/products/Button";
import {WindowsButton} from "src/Basic_Patterns/Creational_Patterns/Factory_Method/cross-platform_ui/code/products/WindowsButton";

/** This would act as a Concrete Creator subclass */
class WindowsDialog extends Dialog {
    public createButton(): Button {
        return new WindowsButton();
    }
}

export { WindowsDialog };