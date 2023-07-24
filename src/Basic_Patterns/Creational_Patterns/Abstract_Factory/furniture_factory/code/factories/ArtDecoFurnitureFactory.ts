import {AbstractFactory} from "./AbstractFactory";
import {Sofa} from "../products/interfaces/Sofa";
import {ArtDecoSofa} from "../products/concrete_products/sofas/ArtDecoSofa";
import {Chair} from "../products/interfaces/Chair";
import {ArtDecoChair} from "../products/concrete_products/chairs/ArtDecoChair";
import {CoffeTable} from "../products/interfaces/CoffeTable";
import {ArtDecoCoffeeTable} from "../products/concrete_products/coffee_tables/ArtDecoCoffeeTable";

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