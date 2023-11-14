import {Vehicle} from "src/Basic_Patterns/Structural_Patterns/Decorator/Vehicle_Improver/code/Vehicle";

class Car implements Vehicle {
    public getDescription(): string {
        return 'car';
    }

    public getCost(): number {
        return 10000;
    }
}

export { Car };