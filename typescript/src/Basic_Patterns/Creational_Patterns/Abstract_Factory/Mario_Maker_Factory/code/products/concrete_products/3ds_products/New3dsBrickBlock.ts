import {BrickBlock} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Mario_Maker_Factory/code/products/interfaces/BrickBlock";
import {Coin} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Mario_Maker_Factory/code/products/interfaces/Coin";
import {New3dsCoin} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Mario_Maker_Factory/code/products/concrete_products/3ds_products/New3dsCoin";

/** Concrete Product of the New Super Mario Bros style family */
class New3dsBrickBlock implements BrickBlock {
    public giveContent(): Coin | void {
        console.log('Mario is using a New 3ds style brick block.')
        if (Math.random() < 0.5) return new New3dsCoin();
    }
}

export { New3dsBrickBlock };