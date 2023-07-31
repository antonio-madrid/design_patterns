import {Archer} from "../../interfaces/Archer";

/** Concrete Product of the red family */
class RedArcher implements Archer {
    public longDistanceAttack(): void {
        console.log('Red archer is attacking from the distance...');
    }
}

export { RedArcher };