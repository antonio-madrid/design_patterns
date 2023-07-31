import {Star} from "../../interfaces/Star";

/** Concrete Product of the Classic style family */
class ClassicStar implements Star {
    public makeInvincible(): void {
        console.log('Classic pixelated star is making Mario invincible.');
    }
}

export { ClassicStar };