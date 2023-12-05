import {AbstractFactory} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/furniture_factory/code/factories/AbstractFactory";
import {Sofa} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/furniture_factory/code/products/interfaces/Sofa";
import {ArtDecoSofa} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/furniture_factory/code/products/concrete_products/sofas/ArtDecoSofa";
import {Chair} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/furniture_factory/code/products/interfaces/Chair";
import {ArtDecoChair} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/furniture_factory/code/products/concrete_products/chairs/ArtDecoChair";
import {CoffeTable} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/furniture_factory/code/products/interfaces/CoffeTable";
import {ArtDecoCoffeeTable} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/furniture_factory/code/products/concrete_products/coffee_tables/ArtDecoCoffeeTable";

class ArtDecoFurnitureFactory implements AbstractFactory {
    public createChair(): Chair {
        return new ArtDecoChair();
    }

    public createSofa(): Sofa {
        return new ArtDecoSofa();
    }

    public createCoffeTable(): CoffeTable {
        return new ArtDecoCoffeeTable();
    }
}

export { ArtDecoFurnitureFactory };