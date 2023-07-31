import {BrickBlock} from "../../interfaces/BrickBlock";
import {Coin} from "../../interfaces/Coin";
import {ClassicCoin} from "./ClassicCoin";

/** Concrete Product of the Classic style family */
class ClassicBrickBlock implements BrickBlock {
    public giveContent(): Coin | void {
        console.log('Mario is using a classic style brick block.')
        if (Math.random() < 0.5) return new ClassicCoin();
    }
}

export { ClassicBrickBlock };