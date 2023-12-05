import {Sofa} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/furniture_factory/code/products/interfaces/Sofa";

class ArtDecoSofa implements Sofa {
    public layOn(): void {
        console.log("You're laying on an artistic decoration sofa.");
    }
}

export { ArtDecoSofa };