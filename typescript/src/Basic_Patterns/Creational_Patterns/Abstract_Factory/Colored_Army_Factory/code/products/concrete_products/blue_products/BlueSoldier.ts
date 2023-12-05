import {Soldier} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Colored_Army_Factory/code/products/interfaces/Soldier";

/** Concrete Product of the blue family */
class BlueSoldier implements Soldier {
    public groundAttack(): void {
        console.log('Blue soldier is attacking from the ground...');
    }
}

export { BlueSoldier };