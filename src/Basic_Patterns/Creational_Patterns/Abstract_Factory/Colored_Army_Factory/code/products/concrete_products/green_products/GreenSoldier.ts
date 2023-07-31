import {Soldier} from "../../interfaces/Soldier";

/** Concrete Product of the green family */
class GreenSoldier implements Soldier {
    public groundAttack(): void {
        console.log('Green soldier is attacking from the ground...');
    }
}

export { GreenSoldier };