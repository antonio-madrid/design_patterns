import {Archer} from "../../interfaces/Archer";

/** Concrete Product of the blue family */
class BlueArcher implements Archer {
    public longDistanceAttack(): void {
        console.log('Blue archer is attacking from the distance...');
    }
}

export { BlueArcher };