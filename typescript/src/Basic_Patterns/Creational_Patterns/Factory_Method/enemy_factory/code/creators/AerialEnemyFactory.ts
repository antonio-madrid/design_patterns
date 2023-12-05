import {EnemyFactory} from "src/Basic_Patterns/Creational_Patterns/Factory_Method/enemy_factory/code/creators/EnemyFactory";
import {AerialEnemy} from "src/Basic_Patterns/Creational_Patterns/Factory_Method/enemy_factory/code/products/AerialEnemy";
import {Enemy} from "src/Basic_Patterns/Creational_Patterns/Factory_Method/enemy_factory/code/products/Enemy";

/** A Concrete Creator class */
class AerialEnemyFactory extends EnemyFactory {
    public createEnemy(): Enemy {
        return new AerialEnemy();
    }
}

export { AerialEnemyFactory };