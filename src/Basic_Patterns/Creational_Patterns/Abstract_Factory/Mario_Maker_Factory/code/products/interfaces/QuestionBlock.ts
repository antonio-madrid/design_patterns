import {Coin} from "./Coin";
import {Star} from "./Star";

interface QuestionBlock {
    giveContent(): Star | Coin | Coin[];
}

export { QuestionBlock };