import {Sofa} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/furniture_factory/code/products/interfaces/Sofa";

class VictorianSofa implements Sofa {
    public layOn(): void {
        console.log("You're laying on a Victorian sofa.");
    }
}

export { VictorianSofa };