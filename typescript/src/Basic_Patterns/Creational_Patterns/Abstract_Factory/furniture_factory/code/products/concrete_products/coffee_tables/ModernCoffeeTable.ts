import {CoffeTable} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/furniture_factory/code/products/interfaces/CoffeTable";

class ModernCoffeeTable implements CoffeTable {
    public putOn(): void {
        console.log("You're putting something on a modern coffee table.");
    }
}

export { ModernCoffeeTable };