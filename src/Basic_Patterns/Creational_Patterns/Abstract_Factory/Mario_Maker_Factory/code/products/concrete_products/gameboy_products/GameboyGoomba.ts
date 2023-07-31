import {Goomba} from "../../interfaces/Goomba";

class GameboyGoomba implements Goomba {
    public chase(): void {
        console.log('Black & white Goomba is chasing Mario.');
    }

    public stroll(): void {
        console.log('Black & white Goomba is around');
    }
}

export { GameboyGoomba };