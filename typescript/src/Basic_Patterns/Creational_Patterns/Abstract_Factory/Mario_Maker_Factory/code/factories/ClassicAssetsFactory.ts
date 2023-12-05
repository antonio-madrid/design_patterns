import {AssetsFactory} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Mario_Maker_Factory/code/factories/AssetsFactory";
import {BrickBlock} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Mario_Maker_Factory/code/products/interfaces/BrickBlock";
import {BulletBill} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Mario_Maker_Factory/code/products/interfaces/BulletBill";
import {Goomba} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Mario_Maker_Factory/code/products/interfaces/Goomba";
import {QuestionBlock} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Mario_Maker_Factory/code/products/interfaces/QuestionBlock";
import {Coin} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Mario_Maker_Factory/code/products/interfaces/Coin";
import {Star} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Mario_Maker_Factory/code/products/interfaces/Star";
import {ClassicCoin} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Mario_Maker_Factory/code/products/concrete_products/classic_products/ClassicCoin";
import {ClassicBrickBlock} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Mario_Maker_Factory/code/products/concrete_products/classic_products/ClassicBrickBlock";
import {ClassicGoomba} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Mario_Maker_Factory/code/products/concrete_products/classic_products/ClassicGoomba";
import {ClassicBulletBill} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Mario_Maker_Factory/code/products/concrete_products/classic_products/ClassicBulletBill";
import {ClassicStar} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Mario_Maker_Factory/code/products/concrete_products/classic_products/ClassicStar";
import {ClassicQuestionBlock} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Mario_Maker_Factory/code/products/concrete_products/classic_products/ClassicQuestionBlock";

/** Concrete Factory - It creates classic style family objects. */
class ClassicAssetsFactory implements AssetsFactory {
    public creteCoin(): Coin {
        return new ClassicCoin();
    }
    public createBrickBlock(): BrickBlock {
        return new ClassicBrickBlock();
    }
    public createQuestionBlock(): QuestionBlock {
        return new ClassicQuestionBlock();
    }

    public createStar(): Star {
        return new ClassicStar();
    }

    public createBulletBil(): BulletBill {
        return new ClassicBulletBill();
    }

    public createGoomba(): Goomba {
        return new ClassicGoomba();
    }
}

export { ClassicAssetsFactory };