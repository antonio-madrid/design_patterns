import {QuestionBlock} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Mario_Maker_Factory/code/products/interfaces/QuestionBlock";
import {Star} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Mario_Maker_Factory/code/products/interfaces/Star";
import {Coin} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Mario_Maker_Factory/code/products/interfaces/Coin";
import {GameboyStar} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Mario_Maker_Factory/code/products/concrete_products/gameboy_products/GameboyStar";
import {GameboyCoin} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Mario_Maker_Factory/code/products/concrete_products/gameboy_products/GameboyCoin";

/** Concrete Product of the GameBoy family */
class GameboyQuestionBlock implements QuestionBlock {
    public giveContent(): Star | Coin[] | Coin {
        console.log('Mario is using a GameBoy style brick block.')
        if (Math.random() < 0.25) return new GameboyStar();
        if (Math.random() < 0.75) return new Array(5).fill(new GameboyCoin());
        return new GameboyCoin();
    }
}

export { GameboyQuestionBlock };