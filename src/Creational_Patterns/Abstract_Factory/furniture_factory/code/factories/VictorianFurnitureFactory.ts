import {AbstractFactory} from "./AbstractFactory";
import {Chair} from "../interfaces/Chair";
import {VictorianChair} from "../products/chairs/VictorianChair";
import {Sofa} from "../interfaces/Sofa";
import {VictorianSofa} from "../products/sofas/VictorianSofa";
import {CoffeTable} from "../interfaces/CoffeTable";
import {VictorianCoffeeTable} from "../products/coffee_tables/VictorianCoffeeTable";

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