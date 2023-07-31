import {Coin} from "../../interfaces/Coin";

class ClassicCoin implements Coin {
    public shape(): void {
        console.log('Giving a classic pixelated coin.');
    }
}

export { ClassicCoin };