import {Chair} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/furniture_factory/code/products/interfaces/Chair";
import {Sofa} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/furniture_factory/code/products/interfaces/Sofa";
import {CoffeTable} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/furniture_factory/code/products/interfaces/CoffeTable";

interface AbstractFactory {
    createChair(): Chair;
    createSofa(): Sofa;
    createCoffeTable(): CoffeTable;
}

export { AbstractFactory };