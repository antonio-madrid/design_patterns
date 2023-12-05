import {Coin} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Mario_Maker_Factory/code/products/interfaces/Coin";

/** Product Interface for several family classes */
interface BrickBlock {
    giveContent(): Coin | void;

}

export { BrickBlock };