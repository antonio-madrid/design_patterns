import {AbstractFactory} from "./AbstractFactory";
import {Chair} from "../products/interfaces/Chair";
import {ModernChair} from "../products/concrete_products/chairs/ModernChair";
import {Sofa} from "../products/interfaces/Sofa";
import {ModernSofa} from "../products/concrete_products/sofas/ModernSofa";
import {CoffeTable} from "../products/interfaces/CoffeTable";
import {ModernCoffeeTable} from "../products/concrete_products/coffee_tables/ModernCoffeeTable";

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