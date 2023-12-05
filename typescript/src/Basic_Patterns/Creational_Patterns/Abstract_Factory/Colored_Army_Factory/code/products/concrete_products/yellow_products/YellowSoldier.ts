import {Soldier} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Colored_Army_Factory/code/products/interfaces/Soldier";

/** Concrete Product of the yellow family */
class YellowSoldier implements Soldier {
    public groundAttack(): void {
        console.log('Yellow soldier is attacking from the ground...');
    }
}

export { YellowSoldier };