import {Coin} from "../../interfaces/Coin";

/** Concrete Product of the GameBoy family */
class GameboyCoin implements Coin {
    public shape(): void {
        console.log('Giving a black and white pixelated coin.');
    }
}

export { GameboyCoin };