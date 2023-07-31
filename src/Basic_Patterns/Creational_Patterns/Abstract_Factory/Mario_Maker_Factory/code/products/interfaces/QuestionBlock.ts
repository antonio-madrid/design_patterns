import {Coin} from "./Coin";
import {Star} from "./Star";

/** Product Interface for several family classes */
interface QuestionBlock {
    giveContent(): Star | Coin | Coin[];
}

export { QuestionBlock };