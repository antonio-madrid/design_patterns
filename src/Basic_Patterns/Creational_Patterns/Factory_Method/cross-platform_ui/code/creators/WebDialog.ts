import {Dialog} from "./Dialog";
import {HTMLButton} from "../products/HTMLButton";
import {Button} from "../products/Button";

/** This would act as a Concrete Creator subclass */
class WebDialog extends Dialog {
    public createButton(): Button {
        return new HTMLButton();
    }
}

export { WebDialog };