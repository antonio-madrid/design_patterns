import {Enemy} from "src/Basic_Patterns/Creational_Patterns/Factory_Method/enemy_factory/code/products/Enemy";

/** A Concrete Product */
class TerrestrialEnemy implements Enemy {
    public attack(): void {
        console.log('Enemy is attacking from the ground!');
    }
}

export { TerrestrialEnemy };