import {HouseBuilder} from "src/Basic_Patterns/Creational_Patterns/Builder/House_Builder/code/builders/HouseBuilder";
import {House} from "src/Basic_Patterns/Creational_Patterns/Builder/House_Builder/code/products/House";
import {WoodenHouse} from "src/Basic_Patterns/Creational_Patterns/Builder/House_Builder/code/products/WoodenHouse";

class WoodenHouseBuilder implements HouseBuilder {
    private house!: House;

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.house = new WoodenHouse();
    }

    public buildWalls(): void {
        this.house.addPart("wooden walls");
    }

    public buildDoors(): void {
        this.house.addPart("wooden doors");
    }

    public buildWindows(): void {
        this.house.addPart("wooden windows");
    }

    public buildRoof(): void {
        this.house.addPart("wooden roof");
    }

    public getResult(): WoodenHouse {
        const result = this.house;
        this.reset();
        return result;
    }
}

export { WoodenHouseBuilder };