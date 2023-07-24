import {CoffeTable} from "../../interfaces/CoffeTable";

class ModernCoffeeTable implements CoffeTable {
    public putOn(): void {
        console.log("You're putting something on a modern coffee table.");
    }
}

export { ModernCoffeeTable };