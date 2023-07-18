import {VehicleFactory} from "./VehicleFactory";
import {Vehicle} from "../products/Vehicle";
import {Car} from "../products/Car";

/** Concrete Creator class */
class CarFactory extends VehicleFactory {
    createVehicle(): Vehicle {
        return new Car();
    }
}

export { CarFactory };