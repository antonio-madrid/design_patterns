import {Soldier} from "../../interfaces/Soldier";

/** Concrete Product of the yellow family */
class YellowSoldier implements Soldier {
    public groundAttack(): void {
        console.log('Yellow soldier is attacking from the ground...');
    }
}

export { YellowSoldier };