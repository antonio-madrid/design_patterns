import {Star} from "../../interfaces/Star";

/** Concrete Product of the New Super Mario Bros style family */
class New3dsStar implements Star {
    public makeInvincible(): void {
        console.log('New 3ds star is making Mario invincible.');
    }
}

export { New3dsStar };