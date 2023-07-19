import {EnemyFactory} from "./EnemyFactory";
import {AerialEnemy} from "../products/AerialEnemy";
import {Enemy} from "../products/Enemy";

/** A Concrete Creator class */
class AerialEnemyFactory extends EnemyFactory {
    public createEnemy(): Enemy {
        return new AerialEnemy();
    }
}

export { AerialEnemyFactory };