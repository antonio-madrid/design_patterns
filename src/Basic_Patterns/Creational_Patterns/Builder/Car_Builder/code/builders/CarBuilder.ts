import {Builder} from "src/Basic_Patterns/Creational_Patterns/Builder/Car_Builder/code/builders/Builder";
import {Car} from "src/Basic_Patterns/Creational_Patterns/Builder/Car_Builder/code/products/Car";

class CarBuilder implements Builder {
    private car: Car = new Car();

    constructor() {
        this.reset();
    }

    reset(): void {
        this.car = new Car();
    }

    setSeats(seats: number): void {
        this.car.seats = seats;
    }

    setGPS(hasGPS: boolean): void {
        this.car.gps = hasGPS;
    }

    setEngine(engine: string): void {
        this.car.engine = engine;
    }

    setTripComputer(tripComputer: boolean): void {
        this.car.tripComputer = tripComputer;
    }

    getProduct(): Car {
        const product = this.car;
        this.reset();
        return product;
    }

}

export {CarBuilder};