import {Vehicle} from "src/Basic_Patterns/Structural_Patterns/Decorator/Vehicle_Improver/code/components/Vehicle";

class VehicleDecorator implements Vehicle {
    constructor(protected vehicle: Vehicle) {}

    public getDescription(): string {
        return this.vehicle.getDescription();
    }

    public getCost(): number {
        return this.vehicle.getCost();
    }
}

export { VehicleDecorator };