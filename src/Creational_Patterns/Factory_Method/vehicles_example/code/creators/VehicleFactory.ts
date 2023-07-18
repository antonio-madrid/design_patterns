import {Vehicle} from "../products/Vehicle";

/** Abstract Creator base class */
abstract class VehicleFactory {
    abstract createVehicle(): Vehicle;

    public startVehicleEngine(): void {
        const vehicle = this.createVehicle();
        vehicle.startEngine();
    }
}

export { VehicleFactory };