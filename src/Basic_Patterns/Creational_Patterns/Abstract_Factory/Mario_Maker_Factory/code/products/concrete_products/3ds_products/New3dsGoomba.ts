import {Goomba} from "../../interfaces/Goomba";

class New3dsGoomba implements Goomba {
    public chase(): void {
        console.log('New 3ds Goomba is chasing Mario.');
    }

    public stroll(): void {
        console.log('New 3ds Goomba is around');
    }
}

export { New3dsGoomba };