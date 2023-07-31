import {AssetsFactory} from "./AssetsFactory";
import {BrickBlock} from "../products/interfaces/BrickBlock";
import {BulletBill} from "../products/interfaces/BulletBill";
import {Goomba} from "../products/interfaces/Goomba";
import {QuestionBlock} from "../products/interfaces/QuestionBlock";
import {Coin} from "../products/interfaces/Coin";
import {Star} from "../products/interfaces/Star";
import {New3dsCoin} from "../products/concrete_products/3ds_products/New3dsCoin";
import {New3dsBrickBlock} from "../products/concrete_products/3ds_products/New3dsBrickBlock";
import {New3dsQuestionBlock} from "../products/concrete_products/3ds_products/New3dsQuestionBlock";
import {New3dsStar} from "../products/concrete_products/3ds_products/New3dsStar";
import {New3dsBulletBill} from "../products/concrete_products/3ds_products/New3dsBulletBill";
import {New3dsGoomba} from "../products/concrete_products/3ds_products/New3dsGoomba";

/** Concrete Factory - It creates New Super Mario Bros family objects. */
class New3dsAssetsFactory implements AssetsFactory {
    public creteCoin(): Coin {
        return new New3dsCoin();
    }
    public createBrickBlock(): BrickBlock {
        return new New3dsBrickBlock();
    }
    public createQuestionBlock(): QuestionBlock {
        return new New3dsQuestionBlock();
    }

    public createStar(): Star {
        return new New3dsStar();
    }

    public createBulletBil(): BulletBill {
        return new New3dsBulletBill();
    }

    public createGoomba(): Goomba {
        return new New3dsGoomba();
    }
}

export { New3dsAssetsFactory };