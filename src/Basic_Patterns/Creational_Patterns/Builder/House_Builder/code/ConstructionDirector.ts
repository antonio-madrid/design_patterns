import {HouseBuilder} from "src/Basic_Patterns/Creational_Patterns/Builder/House_Builder/code/builders/HouseBuilder";
import {WoodenHouse} from "src/Basic_Patterns/Creational_Patterns/Builder/House_Builder/code/products/WoodenHouse";
import {
    WoodenHouseBuilder
} from "src/Basic_Patterns/Creational_Patterns/Builder/House_Builder/code/builders/WoodenHouseBuilder";

class ConstructionDirector {
    construct(builder: HouseBuilder): void {
        builder.buildWalls();
        builder.buildDoors();
        builder.buildWindows();
        builder.buildRoof();
    }

    public getHouse(builder: WoodenHouseBuilder): void {
        builder.getResult();
    }
}

export { ConstructionDirector };