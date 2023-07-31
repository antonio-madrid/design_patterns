import {QuestionBlock} from "../../interfaces/QuestionBlock";
import {Star} from "../../interfaces/Star";
import {Coin} from "../../interfaces/Coin";
import {ClassicStar} from "./ClassicStar";
import {ClassicCoin} from "./ClassicCoin";

/** Concrete Product of the Classic style family */
class ClassicQuestionBlock implements QuestionBlock {
    public giveContent(): Star | Coin[] | Coin {
        console.log('Mario is using a classic style question block.')
        if (Math.random() < 0.25) return new ClassicStar();
        if (Math.random() < 0.75) return new Array(5).fill(new ClassicCoin());
        return new ClassicCoin();
    }
}

export { ClassicQuestionBlock };