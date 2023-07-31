import {Coin} from "../../interfaces/Coin";

/** Concrete Product of the New Super Mario Bros style family */
class New3dsCoin implements Coin {
    public shape(): void {
        console.log('Giving a New 3ds coin.');
    }
}

export { New3dsCoin };