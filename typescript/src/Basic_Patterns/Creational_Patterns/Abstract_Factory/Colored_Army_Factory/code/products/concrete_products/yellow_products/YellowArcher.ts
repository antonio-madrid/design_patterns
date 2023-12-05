import {Archer} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Colored_Army_Factory/code/products/interfaces/Archer";

/** Concrete Product of the yellow family */
class YellowArcher implements Archer {
    public longDistanceAttack(): void {
        console.log('Yellow archer is attacking from the distance...');
    }
}

export { YellowArcher };