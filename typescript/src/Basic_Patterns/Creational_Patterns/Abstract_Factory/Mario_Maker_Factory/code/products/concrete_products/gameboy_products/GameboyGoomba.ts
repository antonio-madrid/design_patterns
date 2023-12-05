import {Goomba} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Mario_Maker_Factory/code/products/interfaces/Goomba";

/** Concrete Product of the GameBoy family */
class GameboyGoomba implements Goomba {
    public chase(): void {
        console.log('Black & white Goomba is chasing Mario.');
    }

    public stroll(): void {
        console.log('Black & white Goomba is around');
    }
}

export { GameboyGoomba };