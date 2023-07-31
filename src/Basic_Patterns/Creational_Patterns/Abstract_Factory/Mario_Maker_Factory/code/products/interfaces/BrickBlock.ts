import {Coin} from "./Coin";

/** Product Interface for several family classes */
interface BrickBlock {
    giveContent(): Coin | void;

}

export { BrickBlock };