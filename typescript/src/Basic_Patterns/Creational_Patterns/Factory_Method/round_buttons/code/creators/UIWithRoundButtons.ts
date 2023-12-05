import {UIFramework} from "src/Basic_Patterns/Creational_Patterns/Factory_Method/round_buttons/code/creators/UIFramework";
import {RoundButton} from "src/Basic_Patterns/Creational_Patterns/Factory_Method/round_buttons/code/products/RoundButton";
import {Button} from "src/Basic_Patterns/Creational_Patterns/Factory_Method/round_buttons/code/products/Button";

/** Concrete Creator */
class UIWithRoundButtons extends UIFramework {
    /** In this case the Concrete Creator is overriding the default Factory Method implementation*/
    public createButton(): Button {
        return new RoundButton();
    }
}

export { UIWithRoundButtons };