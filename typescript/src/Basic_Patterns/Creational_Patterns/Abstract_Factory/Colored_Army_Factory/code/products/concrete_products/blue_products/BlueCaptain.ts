import {Captain} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Colored_Army_Factory/code/products/interfaces/Captain";

/** Concrete Product of the blue family */
class BlueCaptain implements Captain {
    public command():void  {
        console.log('Blue captain is commanding his troops...');
    }
}

export { BlueCaptain };