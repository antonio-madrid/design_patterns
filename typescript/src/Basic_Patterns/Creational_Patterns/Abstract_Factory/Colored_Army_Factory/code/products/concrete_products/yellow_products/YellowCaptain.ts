import {Captain} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Colored_Army_Factory/code/products/interfaces/Captain";

/** Concrete Product of the yellow family */
class YellowCaptain implements Captain {
    public command() {
        console.log('Yellow captain is commanding his troops...');
    }
}

export { YellowCaptain };