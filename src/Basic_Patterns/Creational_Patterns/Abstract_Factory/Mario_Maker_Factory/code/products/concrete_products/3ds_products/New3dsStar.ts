import {Star} from "../../interfaces/Star";

class New3dsStar implements Star {
    public makeInvincible(): void {
        console.log('New 3ds star is making Mario invincible.');
    }
}

export { New3dsStar };