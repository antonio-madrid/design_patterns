import {QuestionBlock} from "../../interfaces/QuestionBlock";
import {Star} from "../../interfaces/Star";
import {Coin} from "../../interfaces/Coin";
import {GameboyStar} from "./GameboyStar";
import {GameboyCoin} from "./GameboyCoin";

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