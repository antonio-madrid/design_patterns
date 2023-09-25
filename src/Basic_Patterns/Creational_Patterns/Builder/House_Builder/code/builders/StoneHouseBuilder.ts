import {HouseBuilder} from "src/Basic_Patterns/Creational_Patterns/Builder/House_Builder/code/builders/HouseBuilder";
import {House} from "src/Basic_Patterns/Creational_Patterns/Builder/House_Builder/code/products/House";
import {StoneHouse} from "src/Basic_Patterns/Creational_Patterns/Builder/House_Builder/code/products/StoneHouse";

class StoneHouseBuilder implements HouseBuilder {
    private house!: House;

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.house = new StoneHouse();
    }

    public buildWalls(): void {
        this.house.addPart("stone walls");
    }

    public buildDoors(): void {
        this.house.addPart("stone doors");
    }

    public buildWindows(): void {
        this.house.addPart("stone windows");
    }

    public buildRoof(): void {
        this.house.addPart("stone roof");
    }

    public getResult(): StoneHouse {
        const result = this.house;
        this.reset();
        return result;
    }
}

export { StoneHouseBuilder };