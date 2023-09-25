import {HouseBuilder} from "src/Basic_Patterns/Creational_Patterns/Builder/House_Builder/code/builders/HouseBuilder";

class ConstructionDirector {
    construct(builder: HouseBuilder): void {
        builder.buildWalls();
        builder.buildDoors();
        builder.buildWindows();
        builder.buildRoof();
    }
}

export { ConstructionDirector };