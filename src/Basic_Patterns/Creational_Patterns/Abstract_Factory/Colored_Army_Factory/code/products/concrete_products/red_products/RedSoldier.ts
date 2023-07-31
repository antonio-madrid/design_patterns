import {Soldier} from "../../interfaces/Soldier";

/** Concrete Product of the red family */
class RedSoldier implements Soldier {
    public groundAttack(): void {
        console.log('Red soldier is attacking from the ground...')
    }
}

export { RedSoldier };