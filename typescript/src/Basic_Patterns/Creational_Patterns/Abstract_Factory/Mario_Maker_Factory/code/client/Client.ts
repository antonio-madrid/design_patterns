import {AssetsFactory} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Mario_Maker_Factory/code/factories/AssetsFactory";
import {Coin} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Mario_Maker_Factory/code/products/interfaces/Coin";
import {BrickBlock} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Mario_Maker_Factory/code/products/interfaces/BrickBlock";
import {Goomba} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Mario_Maker_Factory/code/products/interfaces/Goomba";
import {QuestionBlock} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Mario_Maker_Factory/code/products/interfaces/QuestionBlock";
import {BulletBill} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Mario_Maker_Factory/code/products/interfaces/BulletBill";
import {Star} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Mario_Maker_Factory/code/products/interfaces/Star";
import {ClassicAssetsFactory} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Mario_Maker_Factory/code/factories/ClassicAssetsFactory";
import {GameBoyAssetsFactory} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Mario_Maker_Factory/code/factories/GameBoyAssetsFactory";
import {New3dsAssetsFactory} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Mario_Maker_Factory/code/factories/New3dsAssetsFactory";

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

