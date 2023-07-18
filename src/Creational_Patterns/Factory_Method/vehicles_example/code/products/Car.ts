import {Vehicle} from "./Vehicle";

/** Concrete Product */
class Car implements Vehicle {
    public startEngine(): void {
        console.log('Cart engine is starting up...');
    }
}

export { Car };