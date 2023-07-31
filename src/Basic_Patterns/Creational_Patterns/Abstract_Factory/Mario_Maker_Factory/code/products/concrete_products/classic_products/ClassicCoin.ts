import {Coin} from "../../interfaces/Coin";

/** Concrete Product of the Classic style family */
class ClassicCoin implements Coin {
    public shape(): void {
        console.log('Giving a classic pixelated coin.');
    }
}

export { ClassicCoin };