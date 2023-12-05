import {EnemyFactory} from "src/Basic_Patterns/Creational_Patterns/Factory_Method/enemy_factory/code/creators/EnemyFactory";
import {Enemy} from "src/Basic_Patterns/Creational_Patterns/Factory_Method/enemy_factory/code/products/Enemy";
import {TerrestrialEnemy} from "src/Basic_Patterns/Creational_Patterns/Factory_Method/enemy_factory/code/products/TerrestrialEnemy";

/** A Concrete Creator class */
class TerrestrialEnemyFactory extends EnemyFactory {
    public createEnemy(): Enemy {
        return new TerrestrialEnemy();
    }
}

export { TerrestrialEnemyFactory };