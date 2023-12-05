import {BrickBlock} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Mario_Maker_Factory/code/products/interfaces/BrickBlock";
import {Coin} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Mario_Maker_Factory/code/products/interfaces/Coin";
import {ClassicCoin} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Mario_Maker_Factory/code/products/concrete_products/classic_products/ClassicCoin";

/** Concrete Product of the Classic style family */
class ClassicBrickBlock implements BrickBlock {
    public giveContent(): Coin | void {
        console.log('Mario is using a classic style brick block.')
        if (Math.random() < 0.5) return new ClassicCoin();
    }
}

export { ClassicBrickBlock };