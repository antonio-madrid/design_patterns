import {Soldier} from "../../interfaces/Soldier";

/** Concrete Product of the blue family */
class BlueSoldier implements Soldier {
    public groundAttack(): void {
        console.log('Blue soldier is attacking from the ground...');
    }
}

export { BlueSoldier };