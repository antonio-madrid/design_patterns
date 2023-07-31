import {Star} from "../../interfaces/Star";

class ClassicStar implements Star {
    public makeInvincible(): void {
        console.log('Classic pixelated star is making Mario invincible.');
    }
}

export { ClassicStar };