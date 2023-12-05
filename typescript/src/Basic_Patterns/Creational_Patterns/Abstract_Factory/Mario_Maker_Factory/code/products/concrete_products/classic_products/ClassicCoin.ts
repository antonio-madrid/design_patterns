import {Coin} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Mario_Maker_Factory/code/products/interfaces/Coin";

/** Concrete Product of the Classic style family */
class ClassicCoin implements Coin {
    public shape(): void {
        console.log('Giving a classic pixelated coin.');
    }
}

export { ClassicCoin };