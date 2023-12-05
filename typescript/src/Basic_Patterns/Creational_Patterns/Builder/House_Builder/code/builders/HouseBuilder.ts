import {House} from "src/Basic_Patterns/Creational_Patterns/Builder/House_Builder/code/products/House";

interface HouseBuilder {
    buildWalls(): void;
    buildDoors(): void;
    buildWindows(): void;
    buildRoof(): void;
    getResult(): House;
}

export { HouseBuilder };