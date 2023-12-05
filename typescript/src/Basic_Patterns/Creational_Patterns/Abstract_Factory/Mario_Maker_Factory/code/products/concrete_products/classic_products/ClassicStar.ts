import {Star} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Mario_Maker_Factory/code/products/interfaces/Star";

/** Concrete Product of the Classic style family */
class ClassicStar implements Star {
    public makeInvincible(): void {
        console.log('Classic pixelated star is making Mario invincible.');
    }
}

export { ClassicStar };