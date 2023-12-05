import {Dialog} from "src/Basic_Patterns/Creational_Patterns/Factory_Method/cross-platform_ui/code/creators/Dialog";
import {HTMLButton} from "src/Basic_Patterns/Creational_Patterns/Factory_Method/cross-platform_ui/code/products/HTMLButton";
import {Button} from "src/Basic_Patterns/Creational_Patterns/Factory_Method/cross-platform_ui/code/products/Button";

/** This would act as a Concrete Creator subclass */
class WebDialog extends Dialog {
    public createButton(): Button {
        return new HTMLButton();
    }
}

export { WebDialog };