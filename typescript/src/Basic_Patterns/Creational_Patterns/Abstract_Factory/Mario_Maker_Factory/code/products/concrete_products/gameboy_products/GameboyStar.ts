import {Star} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Mario_Maker_Factory/code/products/interfaces/Star";

/** Concrete Product of the GameBoy family */
class GameboyStar implements Star {
    public makeInvincible(): void {
        console.log('Black & white star is making Mario invincible.');
    }
}

export { GameboyStar };