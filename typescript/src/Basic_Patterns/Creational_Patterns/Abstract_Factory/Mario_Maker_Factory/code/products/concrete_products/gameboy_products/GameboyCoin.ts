import {Coin} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Mario_Maker_Factory/code/products/interfaces/Coin";

/** Concrete Product of the GameBoy family */
class GameboyCoin implements Coin {
    public shape(): void {
        console.log('Giving a black and white pixelated coin.');
    }
}

export { GameboyCoin };