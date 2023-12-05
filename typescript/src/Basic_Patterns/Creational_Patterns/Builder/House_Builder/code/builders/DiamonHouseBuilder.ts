import {HouseBuilder} from "src/Basic_Patterns/Creational_Patterns/Builder/House_Builder/code/builders/HouseBuilder";
import {DiamonHouse} from "src/Basic_Patterns/Creational_Patterns/Builder/House_Builder/code/products/DiamonHouse";
import {House} from "src/Basic_Patterns/Creational_Patterns/Builder/House_Builder/code/products/House";

class DiamonHouseBuilder implements HouseBuilder {
    private house!: House;

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.house = new DiamonHouse();
    }

    public buildWalls(): void {
        this.house.addPart("diamon walls");
    }

    public buildDoors(): void {
        this.house.addPart("diamon doors");
    }

    public buildWindows(): void {
        this.house.addPart("diamon windows");
    }

    public buildRoof(): void {
        this.house.addPart("diamon roof");
    }

    public getResult(): DiamonHouse {
        const result = this.house;
        this.reset();
        return result;
    }

}

export { DiamonHouseBuilder };