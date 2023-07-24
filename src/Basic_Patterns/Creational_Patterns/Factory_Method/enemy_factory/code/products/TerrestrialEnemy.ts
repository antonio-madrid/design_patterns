import {Enemy} from "./Enemy";

/** A Concrete Product */
class TerrestrialEnemy implements Enemy {
    public attack(): void {
        console.log('Enemy is attacking from the ground!');
    }
}

export { TerrestrialEnemy };