import {AbstractFactory} from "../factories/AbstractFactory";
import {Chair} from "../products/interfaces/Chair";
import {Sofa} from "../products/interfaces/Sofa";
import {CoffeTable} from "../products/interfaces/CoffeTable";
import {ModernFurnitureFactory} from "../factories/ModernFurnitureFactory";
import {VictorianFurnitureFactory} from "../factories/VictorianFurnitureFactory";
import {ArtDecoFurnitureFactory} from "../factories/ArtDecoFurnitureFactory";

function clientCode(factory: AbstractFactory): void {
    const chair: Chair = factory.createChair();
    chair.sitOn();

    const sofa: Sofa = factory.createSofa();
    sofa.layOn();

    const coffeeTable: CoffeTable = factory.createCoffeTable();
    coffeeTable.putOn();
}

console.log('Requesting modern furniture...');
clientCode(new ModernFurnitureFactory());

console.log('Requesting Victorian furniture...');
clientCode(new VictorianFurnitureFactory());

console.log('Requesting artistic decoration furniture...');
clientCode(new ArtDecoFurnitureFactory());
