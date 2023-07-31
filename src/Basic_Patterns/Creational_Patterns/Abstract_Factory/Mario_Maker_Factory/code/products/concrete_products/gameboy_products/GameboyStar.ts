import {Star} from "../../interfaces/Star";

class GameboyStar implements Star {
    public makeInvincible(): void {
        console.log('Black & white star is making Mario invincible.');
    }
}

export { GameboyStar };