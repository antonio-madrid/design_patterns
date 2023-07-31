import {BrickBlock} from "../../interfaces/BrickBlock";
import {Coin} from "../../interfaces/Coin";
import {GameboyCoin} from "./GameboyCoin";

class GameboyBrickBlock implements BrickBlock {
    public giveContent(): Coin | void {
        console.log('Mario is using a GameBoy style brick block.')
        if (Math.random() < 0.5) return new GameboyCoin();
    }
}

export { GameboyBrickBlock };