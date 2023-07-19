import {Enemy} from "../products/Enemy";

/** Base Creator class */
abstract class EnemyFactory {
    public abstract createEnemy(): Enemy;
}

export { EnemyFactory };