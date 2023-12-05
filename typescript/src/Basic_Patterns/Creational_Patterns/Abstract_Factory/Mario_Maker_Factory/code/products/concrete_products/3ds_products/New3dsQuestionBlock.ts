import {QuestionBlock} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Mario_Maker_Factory/code/products/interfaces/QuestionBlock";
import {Star} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Mario_Maker_Factory/code/products/interfaces/Star";
import {Coin} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Mario_Maker_Factory/code/products/interfaces/Coin";
import {New3dsStar} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Mario_Maker_Factory/code/products/concrete_products/3ds_products/New3dsStar";
import {New3dsCoin} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Mario_Maker_Factory/code/products/concrete_products/3ds_products/New3dsCoin";

/** Concrete Product of the New Super Mario Bros style family */
class New3dsQuestionBlock implements QuestionBlock {
    public giveContent(): Star | Coin[] | Coin {
        console.log('Mario is using a New 3ds style question block.')
        if (Math.random() < 0.25) return new New3dsStar();
        if (Math.random() < 0.75) return new Array(5).fill(new New3dsCoin());
        return new New3dsCoin();
    }
}

export { New3dsQuestionBlock };