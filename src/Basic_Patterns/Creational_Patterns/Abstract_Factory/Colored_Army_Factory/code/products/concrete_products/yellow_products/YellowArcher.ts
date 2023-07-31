import {Archer} from "../../interfaces/Archer";

/** Concrete Product of the yellow family */
class YellowArcher implements Archer {
    public longDistanceAttack(): void {
        console.log('Yellow archer is attacking from the distance...');
    }
}

export { YellowArcher };