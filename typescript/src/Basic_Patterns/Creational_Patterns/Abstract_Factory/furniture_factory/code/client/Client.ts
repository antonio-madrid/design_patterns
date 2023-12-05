import {AbstractFactory} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/furniture_factory/code/factories/AbstractFactory";
import {Chair} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/furniture_factory/code/products/interfaces/Chair";
import {Sofa} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/furniture_factory/code/products/interfaces/Sofa";
import {CoffeTable} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/furniture_factory/code/products/interfaces/CoffeTable";
import {ModernFurnitureFactory} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/furniture_factory/code/factories/ModernFurnitureFactory";
import {VictorianFurnitureFactory} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/furniture_factory/code/factories/VictorianFurnitureFactory";
import {ArtDecoFurnitureFactory} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/furniture_factory/code/factories/ArtDecoFurnitureFactory";

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
