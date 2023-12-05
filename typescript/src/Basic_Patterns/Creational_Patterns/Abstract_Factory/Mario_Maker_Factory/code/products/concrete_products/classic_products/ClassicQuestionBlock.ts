import {QuestionBlock} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Mario_Maker_Factory/code/products/interfaces/QuestionBlock";
import {Star} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Mario_Maker_Factory/code/products/interfaces/Star";
import {Coin} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Mario_Maker_Factory/code/products/interfaces/Coin";
import {ClassicStar} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Mario_Maker_Factory/code/products/concrete_products/classic_products/ClassicStar";
import {ClassicCoin} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Mario_Maker_Factory/code/products/concrete_products/classic_products/ClassicCoin";

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