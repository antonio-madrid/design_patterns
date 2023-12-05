import {Captain} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Colored_Army_Factory/code/products/interfaces/Captain";

/** Concrete Product of the green family */
class GreenCaptain implements Captain {
    public command(): void {
        console.log('Green captain is commanding his troops...');
    }
}

export { GreenCaptain };