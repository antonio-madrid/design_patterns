import {AbstractFactory} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/furniture_factory/code/factories/AbstractFactory";
import {Chair} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/furniture_factory/code/products/interfaces/Chair";
import {ModernChair} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/furniture_factory/code/products/concrete_products/chairs/ModernChair";
import {Sofa} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/furniture_factory/code/products/interfaces/Sofa";
import {ModernSofa} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/furniture_factory/code/products/concrete_products/sofas/ModernSofa";
import {CoffeTable} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/furniture_factory/code/products/interfaces/CoffeTable";
import {ModernCoffeeTable} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/furniture_factory/code/products/concrete_products/coffee_tables/ModernCoffeeTable";

class ModernFurnitureFactory implements AbstractFactory {
    public createChair(): Chair {
        return new ModernChair();
    }

    public createSofa(): Sofa {
        return new ModernSofa();
    }

    public createCoffeTable(): CoffeTable {
        return new ModernCoffeeTable();
    }
}

export { ModernFurnitureFactory };