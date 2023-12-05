import {Coin} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Mario_Maker_Factory/code/products/interfaces/Coin";

/** Concrete Product of the New Super Mario Bros style family */
class New3dsCoin implements Coin {
    public shape(): void {
        console.log('Giving a New 3ds coin.');
    }
}

export { New3dsCoin };