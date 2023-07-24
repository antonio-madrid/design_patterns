import {EnemyFactory} from "./EnemyFactory";
import {Enemy} from "../products/Enemy";
import {TerrestrialEnemy} from "../products/TerrestrialEnemy";

/** A Concrete Creator class */
class TerrestrialEnemyFactory extends EnemyFactory {
    public createEnemy(): Enemy {
        return new TerrestrialEnemy();
    }
}

export { TerrestrialEnemyFactory };