import {
    VehicleDecorator
} from "src/Basic_Patterns/Structural_Patterns/Decorator/Vehicle_Improver/code/decorators/VehicleDecorator";

class SportPackageDecorator extends VehicleDecorator {
    public getDescription(): string {
        return `${super.getDescription()} with Sport Package`;
    }

    public getCost(): number {
        return super.getCost() * 5000;
    }
}

export { SportPackageDecorator };