import {UIFramework} from "./UIFramework";
import {RoundButton} from "../products/RoundButton";
import {Button} from "../products/Button";

/** Concrete Creator */
class UIWithRoundButtons extends UIFramework {
    /** In this case the Concrete Creator is overriding the default Factory Method implementation*/
    public createButton(): Button {
        return new RoundButton();
    }
}

export { UIWithRoundButtons };