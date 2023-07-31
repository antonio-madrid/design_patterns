import {Coin} from "../../interfaces/Coin";

class New3dsCoin implements Coin {
    public shape(): void {
        console.log('Giving a New 3ds coin.');
    }
}

export { New3dsCoin };