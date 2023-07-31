import {Goomba} from "../../interfaces/Goomba";

/** Concrete Product of the Classic style family */
class ClassicGoomba implements Goomba {
    public chase(): void {
        console.log('Classic pixelated Goomba is chasing Mario.');
    }

    public stroll(): void {
        console.log('Classic pixelated Goomba is around');
    }
}

export { ClassicGoomba };