import {AbstractFactory} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/furniture_factory/code/factories/AbstractFactory";
import {Chair} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/furniture_factory/code/products/interfaces/Chair";
import {VictorianChair} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/furniture_factory/code/products/concrete_products/chairs/VictorianChair";
import {Sofa} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/furniture_factory/code/products/interfaces/Sofa";
import {VictorianSofa} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/furniture_factory/code/products/concrete_products/sofas/VictorianSofa";
import {CoffeTable} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/furniture_factory/code/products/interfaces/CoffeTable";
import {VictorianCoffeeTable} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/furniture_factory/code/products/concrete_products/coffee_tables/VictorianCoffeeTable";

class VictorianFurnitureFactory implements AbstractFactory {
    public createChair(): Chair {
        return new VictorianChair();
    }

    public createSofa(): Sofa {
        return new VictorianSofa();
    }

    public createCoffeTable(): CoffeTable {
        return new VictorianCoffeeTable();
    }
}

export { VictorianFurnitureFactory };