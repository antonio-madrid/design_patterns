import {Button} from "../products/Button";
import {SquareButton} from "../products/SquareButton";

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