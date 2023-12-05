import {Captain} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Colored_Army_Factory/code/products/interfaces/Captain";

/** Concrete Product of the red family */
class RedCaptain implements Captain {
    public command(): void {
        console.log('Red captain is commanding his troops...')
    }
}

export { RedCaptain };