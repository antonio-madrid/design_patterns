import {Goomba} from "../../interfaces/Goomba";

class ClassicGoomba implements Goomba {
    public chase(): void {
        console.log('Classic pixelated Goomba is chasing Mario.');
    }

    public stroll(): void {
        console.log('Classic pixelated Goomba is around');
    }
}

export { ClassicGoomba };