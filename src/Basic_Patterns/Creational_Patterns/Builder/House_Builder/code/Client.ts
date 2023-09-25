import {
    ConstructionDirector
} from "src/Basic_Patterns/Creational_Patterns/Builder/House_Builder/code/ConstructionDirector";
import {
    WoodenHouseBuilder
} from "src/Basic_Patterns/Creational_Patterns/Builder/House_Builder/code/builders/WoodenHouseBuilder";
import {
    StoneHouseBuilder
} from "src/Basic_Patterns/Creational_Patterns/Builder/House_Builder/code/builders/StoneHouseBuilder";
import {
    DiamonHouseBuilder
} from "src/Basic_Patterns/Creational_Patterns/Builder/House_Builder/code/builders/DiamonHouseBuilder";

const director = new ConstructionDirector();
const woodenBuilder = new WoodenHouseBuilder();
const stoneBuilder = new StoneHouseBuilder();
const diamonBuilder = new DiamonHouseBuilder();

// Build wooden house
director.construct(woodenBuilder);
const woodenHouse = woodenBuilder.getResult();
woodenHouse.show();

// Build stone house
director.construct(stoneBuilder);
const stoneHouse = stoneBuilder.getResult();
stoneHouse.show();

// Build diamon house
director.construct(diamonBuilder);
const diamonHouse = diamonBuilder.getResult();
diamonHouse.show();