import {Archer} from "../../interfaces/Archer";

/** Concrete Product of the green family */
class GreenArcher implements Archer {
    public longDistanceAttack(): void {
        console.log('Green archer is attacking from the distance...');
    }
}

export { GreenArcher };