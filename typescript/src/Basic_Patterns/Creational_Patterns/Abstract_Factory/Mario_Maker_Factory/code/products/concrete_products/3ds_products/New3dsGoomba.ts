import {Goomba} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Mario_Maker_Factory/code/products/interfaces/Goomba";

/** Concrete Product of the New Super Mario Bros style family */
class New3dsGoomba implements Goomba {
    public chase(): void {
        console.log('New 3ds Goomba is chasing Mario.');
    }

    public stroll(): void {
        console.log('New 3ds Goomba is around');
    }
}

export { New3dsGoomba };