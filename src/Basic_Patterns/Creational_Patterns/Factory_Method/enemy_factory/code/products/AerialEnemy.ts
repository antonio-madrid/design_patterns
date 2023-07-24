import {Enemy} from "./Enemy";

/** A Concrete Product */
class AerialEnemy implements Enemy {
    public attack(): void {
        console.log('Enemy is attacking from sky!');
    }
}

export { AerialEnemy };