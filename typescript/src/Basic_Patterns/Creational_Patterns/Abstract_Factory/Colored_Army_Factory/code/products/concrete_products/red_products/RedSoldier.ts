import {Soldier} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Colored_Army_Factory/code/products/interfaces/Soldier";

/** Concrete Product of the red family */
class RedSoldier implements Soldier {
    public groundAttack(): void {
        console.log('Red soldier is attacking from the ground...')
    }
}

export { RedSoldier };