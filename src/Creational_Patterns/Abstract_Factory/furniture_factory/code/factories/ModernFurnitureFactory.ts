import {AbstractFactory} from "./AbstractFactory";
import {Chair} from "../interfaces/Chair";
import {ModernChair} from "../products/chairs/ModernChair";
import {Sofa} from "../interfaces/Sofa";
import {ModernSofa} from "../products/sofas/ModernSofa";
import {CoffeTable} from "../interfaces/CoffeTable";
import {ModernCoffeeTable} from "../products/coffee_tables/ModernCoffeeTable";

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