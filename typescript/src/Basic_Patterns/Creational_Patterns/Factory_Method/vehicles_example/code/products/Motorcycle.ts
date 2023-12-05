import {Vehicle} from "src/Basic_Patterns/Creational_Patterns/Factory_Method/vehicles_example/code/products/Vehicle";

/** Concrete Product */
class Motorcycle implements Vehicle {
    public startEngine(): void {
        console.log('Motorcycle engine is starting up...');
    }
}

export { Motorcycle };