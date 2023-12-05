import {Chair} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/furniture_factory/code/products/interfaces/Chair";

class ModernChair implements Chair {
    public sitOn(): void {
        console.log("You're sitting on a modern chair.");
    }
}

export { ModernChair };