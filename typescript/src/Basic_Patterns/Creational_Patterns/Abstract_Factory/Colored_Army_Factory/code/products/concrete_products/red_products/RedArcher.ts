import {Archer} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Colored_Army_Factory/code/products/interfaces/Archer";

/** Concrete Product of the red family */
class RedArcher implements Archer {
    public longDistanceAttack(): void {
        console.log('Red archer is attacking from the distance...');
    }
}

export { RedArcher };