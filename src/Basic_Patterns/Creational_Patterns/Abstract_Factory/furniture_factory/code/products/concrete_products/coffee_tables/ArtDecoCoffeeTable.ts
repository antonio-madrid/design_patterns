import {CoffeTable} from "../../interfaces/CoffeTable";

class ArtDecoCoffeeTable implements CoffeTable {
    public putOn(): void {
        console.log("You're putting something on an artistic decoration coffee table.");
    }
}

export { ArtDecoCoffeeTable };