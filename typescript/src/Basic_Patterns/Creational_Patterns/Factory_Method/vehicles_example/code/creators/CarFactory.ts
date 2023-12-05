import {VehicleFactory} from "src/Basic_Patterns/Creational_Patterns/Factory_Method/vehicles_example/code/creators/VehicleFactory";
import {Vehicle} from "src/Basic_Patterns/Creational_Patterns/Factory_Method/vehicles_example/code/products/Vehicle";
import {Car} from "src/Basic_Patterns/Creational_Patterns/Factory_Method/vehicles_example/code/products/Car";

/** Concrete Creator class */
class CarFactory extends VehicleFactory {
    createVehicle(): Vehicle {
        return new Car();
    }
}

export { CarFactory };