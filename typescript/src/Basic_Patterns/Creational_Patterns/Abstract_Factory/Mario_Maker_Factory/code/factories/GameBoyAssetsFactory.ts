import {AssetsFactory} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Mario_Maker_Factory/code/factories/AssetsFactory";
import {BrickBlock} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Mario_Maker_Factory/code/products/interfaces/BrickBlock";
import {BulletBill} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Mario_Maker_Factory/code/products/interfaces/BulletBill";
import {Goomba} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Mario_Maker_Factory/code/products/interfaces/Goomba";
import {QuestionBlock} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Mario_Maker_Factory/code/products/interfaces/QuestionBlock";
import {Coin} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Mario_Maker_Factory/code/products/interfaces/Coin";
import {Star} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Mario_Maker_Factory/code/products/interfaces/Star";
import {GameboyCoin} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Mario_Maker_Factory/code/products/concrete_products/gameboy_products/GameboyCoin";
import {GameboyStar} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Mario_Maker_Factory/code/products/concrete_products/gameboy_products/GameboyStar";
import {GameboyBulletBill} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Mario_Maker_Factory/code/products/concrete_products/gameboy_products/GameboyBulletBill";
import {GameboyGoomba} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Mario_Maker_Factory/code/products/concrete_products/gameboy_products/GameboyGoomba";
import {GameboyBrickBlock} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Mario_Maker_Factory/code/products/concrete_products/gameboy_products/GameboyBrickBlock";
import {GameboyQuestionBlock} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Mario_Maker_Factory/code/products/concrete_products/gameboy_products/GameboyQuestionBlock";

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