import {AbstractFactory} from "./AbstractFactory";
import {Chair} from "../products/interfaces/Chair";
import {VictorianChair} from "../products/concrete_products/chairs/VictorianChair";
import {Sofa} from "../products/interfaces/Sofa";
import {VictorianSofa} from "../products/concrete_products/sofas/VictorianSofa";
import {CoffeTable} from "../products/interfaces/CoffeTable";
import {VictorianCoffeeTable} from "../products/concrete_products/coffee_tables/VictorianCoffeeTable";

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