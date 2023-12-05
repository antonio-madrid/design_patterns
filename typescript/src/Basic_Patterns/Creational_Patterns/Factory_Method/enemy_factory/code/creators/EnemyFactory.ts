import {Enemy} from "src/Basic_Patterns/Creational_Patterns/Factory_Method/enemy_factory/code/products/Enemy";

/** Base Creator class */
abstract class EnemyFactory {
    public abstract createEnemy(): Enemy;
}

export { EnemyFactory };