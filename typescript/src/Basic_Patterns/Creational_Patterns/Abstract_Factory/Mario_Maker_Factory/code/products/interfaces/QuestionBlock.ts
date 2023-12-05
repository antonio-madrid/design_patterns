import {Coin} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Mario_Maker_Factory/code/products/interfaces/Coin";
import {Star} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Mario_Maker_Factory/code/products/interfaces/Star";

/** Product Interface for several family classes */
interface QuestionBlock {
    giveContent(): Star | Coin | Coin[];
}

export { QuestionBlock };