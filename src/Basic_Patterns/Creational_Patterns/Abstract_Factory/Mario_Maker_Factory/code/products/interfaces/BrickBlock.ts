import {Coin} from "./Coin";

interface BrickBlock {
    giveContent(): Coin | void;

}

export { BrickBlock };