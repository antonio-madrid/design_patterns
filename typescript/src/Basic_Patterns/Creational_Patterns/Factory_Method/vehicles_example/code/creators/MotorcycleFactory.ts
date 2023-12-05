import {VehicleFactory} from "src/Basic_Patterns/Creational_Patterns/Factory_Method/vehicles_example/code/creators/VehicleFactory";
import {Vehicle} from "src/Basic_Patterns/Creational_Patterns/Factory_Method/vehicles_example/code/products/Vehicle";
import {Motorcycle} from "src/Basic_Patterns/Creational_Patterns/Factory_Method/vehicles_example/code/products/Motorcycle";

/** Concrete Creator class */
class MotorcycleFactory extends VehicleFactory {
    createVehicle(): Vehicle {
        return new Motorcycle();
    }
}

export { MotorcycleFactory };