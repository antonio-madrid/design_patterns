import {Button} from "src/Basic_Patterns/Creational_Patterns/Factory_Method/round_buttons/code/products/Button";
import {SquareButton} from "src/Basic_Patterns/Creational_Patterns/Factory_Method/round_buttons/code/products/SquareButton";

/** Creator base class */
class UIFramework {
    /** Default Factory Method - when having a default behaviour the method is not abstract */
    public createButton(): Button {
        return new SquareButton();
    }

    public renderButton(): void {
        const button: Button = this.createButton();
        button.render();
    }
}

export { UIFramework };