import {BrickBlock} from "../../interfaces/BrickBlock";
import {Coin} from "../../interfaces/Coin";
import {New3dsCoin} from "./New3dsCoin";

class New3dsBrickBlock implements BrickBlock {
    public giveContent(): Coin | void {
        console.log('Mario is using a New 3ds style brick block.')
        if (Math.random() < 0.5) return new New3dsCoin();
    }
}

export { New3dsBrickBlock };