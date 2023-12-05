import {Sofa} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/furniture_factory/code/products/interfaces/Sofa";

class ModernSofa implements Sofa {
    public layOn(): void {
        console.log("You're laying on a modern sofa.");
    }
}

export { ModernSofa };