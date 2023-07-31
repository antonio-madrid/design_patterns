import {AssetsFactory} from "./AssetsFactory";
import {BrickBlock} from "../products/interfaces/BrickBlock";
import {BulletBill} from "../products/interfaces/BulletBill";
import {Goomba} from "../products/interfaces/Goomba";
import {QuestionBlock} from "../products/interfaces/QuestionBlock";
import {Coin} from "../products/interfaces/Coin";
import {Star} from "../products/interfaces/Star";
import {GameboyCoin} from "../products/concrete_products/gameboy_products/GameboyCoin";
import {GameboyStar} from "../products/concrete_products/gameboy_products/GameboyStar";
import {GameboyBulletBill} from "../products/concrete_products/gameboy_products/GameboyBulletBill";
import {GameboyGoomba} from "../products/concrete_products/gameboy_products/GameboyGoomba";
import {GameboyBrickBlock} from "../products/concrete_products/gameboy_products/GameboyBrickBlock";
import {GameboyQuestionBlock} from "../products/concrete_products/gameboy_products/GameboyQuestionBlock";

/** Concrete Factory - It creates GameBoy family objects. */
class GameBoyAssetsFactory implements AssetsFactory {
    public creteCoin(): Coin {
        return new GameboyCoin();
    }
    public createBrickBlock(): BrickBlock {
        return new GameboyBrickBlock();
    }
    public createQuestionBlock(): QuestionBlock {
        return new GameboyQuestionBlock();
    }

    public createStar(): Star {
        return new GameboyStar();
    }

    public createBulletBil(): BulletBill {
        return new GameboyBulletBill();
    }

    public createGoomba(): Goomba {
        return new GameboyGoomba();
    }
}

export { GameBoyAssetsFactory };