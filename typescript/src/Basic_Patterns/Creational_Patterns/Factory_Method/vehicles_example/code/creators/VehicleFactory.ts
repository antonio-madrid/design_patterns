import {Vehicle} from "src/Basic_Patterns/Creational_Patterns/Factory_Method/vehicles_example/code/products/Vehicle";

/** Abstract Creator base class */
abstract class VehicleFactory {
    abstract createVehicle(): Vehicle;

    public startVehicleEngine(): void {
        const vehicle = this.createVehicle();
        vehicle.startEngine();
    }
}

export { VehicleFactory };