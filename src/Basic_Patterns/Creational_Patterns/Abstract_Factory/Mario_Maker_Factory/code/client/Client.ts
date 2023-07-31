import {AssetsFactory} from "../factories/AssetsFactory";
import {Coin} from "../products/interfaces/Coin";
import {BrickBlock} from "../products/interfaces/BrickBlock";
import {Goomba} from "../products/interfaces/Goomba";
import {QuestionBlock} from "../products/interfaces/QuestionBlock";
import {BulletBill} from "../products/interfaces/BulletBill";
import {Star} from "../products/interfaces/Star";
import {ClassicAssetsFactory} from "../factories/ClassicAssetsFactory";
import {GameBoyAssetsFactory} from "../factories/GameBoyAssetsFactory";
import {New3dsAssetsFactory} from "../factories/New3dsAssetsFactory";

/** Part of the Client's code using a Factory to create a family of objects. */
function clientCode(factory: AssetsFactory): void {
    const coin: Coin = factory.creteCoin();
    coin.shape();

    const brickBlock: BrickBlock = factory.createBrickBlock();
    brickBlock.giveContent();

    const goomba: Goomba = factory.createGoomba();
    goomba.stroll();
    goomba.chase();

    const questionBlock: QuestionBlock = factory.createQuestionBlock();
    questionBlock.giveContent();

    const bulletBill: BulletBill = factory.createBulletBil();
    bulletBill.chase();

    const star: Star = factory.createStar();
    star.makeInvincible();
}

console.log('\nRendering the Super Mario classic style: ');
clientCode(new ClassicAssetsFactory());

console.log('\nRendering the GameBoy style: ');
clientCode(new GameBoyAssetsFactory());

console.log('\nRendering the New Super Mario Bros style: ');
clientCode(new New3dsAssetsFactory());

