import {CoffeTable} from "../../interfaces/CoffeTable";

class VictorianCoffeeTable implements CoffeTable {
    public putOn(): void {
        console.log("You're putting something on a modern coffee table.");
    }
}

export { VictorianCoffeeTable };