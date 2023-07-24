import {Vehicle} from "./Vehicle";

/** Concrete Product */
class Motorcycle implements Vehicle {
    public startEngine(): void {
        console.log('Motorcycle engine is starting up...');
    }
}

export { Motorcycle };