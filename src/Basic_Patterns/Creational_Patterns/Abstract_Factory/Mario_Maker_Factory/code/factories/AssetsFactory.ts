import {Star} from "../products/interfaces/Star";
import {Coin} from "../products/interfaces/Coin";
import {BrickBlock} from "../products/interfaces/BrickBlock";
import {QuestionBlock} from "../products/interfaces/QuestionBlock";
import {Goomba} from "../products/interfaces/Goomba";
import {BulletBill} from "../products/interfaces/BulletBill";

/** Abstract Factory */
interface AssetsFactory {
    creteCoin(): Coin;
    createBrickBlock(): BrickBlock;
    createQuestionBlock(): QuestionBlock;
    createStar(): Star;
    createGoomba(): Goomba;
    createBulletBil(): BulletBill;
}

export { AssetsFactory };