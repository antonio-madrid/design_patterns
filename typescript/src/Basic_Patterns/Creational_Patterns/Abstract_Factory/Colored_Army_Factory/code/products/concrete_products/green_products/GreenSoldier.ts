import {Soldier} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Colored_Army_Factory/code/products/interfaces/Soldier";

/** Concrete Product of the green family */
class GreenSoldier implements Soldier {
    public groundAttack(): void {
        console.log('Green soldier is attacking from the ground...');
    }
}

export { GreenSoldier };