import {VehicleFactory} from "./VehicleFactory";
import {Vehicle} from "../products/Vehicle";
import {Motorcycle} from "../products/Motorcycle";

/** Concrete Creator class */
class MotorcycleFactory extends VehicleFactory {
    createVehicle(): Vehicle {
        return new Motorcycle();
    }
}

export { MotorcycleFactory };