import {Coin} from "../../interfaces/Coin";

class GameboyCoin implements Coin {
    public shape(): void {
        console.log('Giving a black and white pixelated coin.');
    }
}

export { GameboyCoin };