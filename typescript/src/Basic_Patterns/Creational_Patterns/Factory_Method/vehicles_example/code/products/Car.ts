import {Vehicle} from "src/Basic_Patterns/Creational_Patterns/Factory_Method/vehicles_example/code/products/Vehicle";

/** Concrete Product */
class Car implements Vehicle {
    public startEngine(): void {
        console.log('Cart engine is starting up...');
    }
}

export { Car };