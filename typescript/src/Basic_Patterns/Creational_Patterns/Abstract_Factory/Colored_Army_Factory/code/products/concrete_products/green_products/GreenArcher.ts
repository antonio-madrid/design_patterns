import {Archer} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Colored_Army_Factory/code/products/interfaces/Archer";

/** Concrete Product of the green family */
class GreenArcher implements Archer {
    public longDistanceAttack(): void {
        console.log('Green archer is attacking from the distance...');
    }
}

export { GreenArcher };