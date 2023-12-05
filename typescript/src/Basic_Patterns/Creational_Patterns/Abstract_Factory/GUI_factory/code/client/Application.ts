import {GUIFactory} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/GUI_factory/code/factories/GUIFactory";
import {Button} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/GUI_factory/code/products/interfaces/Button";
import {Checkbox} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/GUI_factory/code/products/interfaces/Checkbox";

class Application {
    private factory: GUIFactory;
    private button: Button | null = null;
    private checkbox: Checkbox | null = null;

    public constructor(factory: GUIFactory) {
        this.factory = factory;
    }

    public createUI() {
        this.button = this.factory.createButton();
        this.checkbox = this.factory.createCheckbox();
    }

    public paint() {
        this.button?.paint();
        this.checkbox?.paint();
    }
}

export { Application };