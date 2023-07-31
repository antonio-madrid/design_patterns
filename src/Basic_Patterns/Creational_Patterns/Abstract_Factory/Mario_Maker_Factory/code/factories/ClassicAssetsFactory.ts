import {AssetsFactory} from "./AssetsFactory";
import {BrickBlock} from "../products/interfaces/BrickBlock";
import {BulletBill} from "../products/interfaces/BulletBill";
import {Goomba} from "../products/interfaces/Goomba";
import {QuestionBlock} from "../products/interfaces/QuestionBlock";
import {Coin} from "../products/interfaces/Coin";
import {Star} from "../products/interfaces/Star";
import {ClassicCoin} from "../products/concrete_products/classic_products/ClassicCoin";
import {ClassicBrickBlock} from "../products/concrete_products/classic_products/ClassicBrickBlock";
import {ClassicGoomba} from "../products/concrete_products/classic_products/ClassicGoomba";
import {ClassicBulletBill} from "../products/concrete_products/classic_products/ClassicBulletBill";
import {ClassicStar} from "../products/concrete_products/classic_products/ClassicStar";
import {ClassicQuestionBlock} from "../products/concrete_products/classic_products/ClassicQuestionBlock";

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