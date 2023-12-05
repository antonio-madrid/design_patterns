import {BrickBlock} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Mario_Maker_Factory/code/products/interfaces/BrickBlock";
import {Coin} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Mario_Maker_Factory/code/products/interfaces/Coin";
import {GameboyCoin} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Mario_Maker_Factory/code/products/concrete_products/gameboy_products/GameboyCoin";

/** Concrete Product of the GameBoy family */
class GameboyBrickBlock implements BrickBlock {
    public giveContent(): Coin | void {
        console.log('Mario is using a GameBoy style brick block.')
        if (Math.random() < 0.5) return new GameboyCoin();
    }
}

export { GameboyBrickBlock };