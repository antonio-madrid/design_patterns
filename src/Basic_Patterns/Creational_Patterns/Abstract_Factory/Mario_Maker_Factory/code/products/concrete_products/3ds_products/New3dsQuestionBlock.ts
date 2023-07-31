import {QuestionBlock} from "../../interfaces/QuestionBlock";
import {Star} from "../../interfaces/Star";
import {Coin} from "../../interfaces/Coin";
import {New3dsStar} from "./New3dsStar";
import {New3dsCoin} from "./New3dsCoin";

class New3dsQuestionBlock implements QuestionBlock {
    public giveContent(): Star | Coin[] | Coin {
        console.log('Mario is using a New 3ds style question block.')
        if (Math.random() < 0.25) return new New3dsStar();
        if (Math.random() < 0.75) return new Array(5).fill(new New3dsCoin());
        return new New3dsCoin();
    }
}

export { New3dsQuestionBlock };