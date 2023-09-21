import {Builder} from "src/Basic_Patterns/Creational_Patterns/Builder/Car_Builder/code/builders/Builder";
import {Manual} from "src/Basic_Patterns/Creational_Patterns/Builder/Car_Builder/code/products/Manual";

class CarManualBuilder implements Builder {
    private manual: Manual = new Manual();

    constructor() {
        this.reset();
    }

    reset() {
        this.manual = new Manual();
    }

    setEngine(engine: string): void {
        this.manual.engineInstructions = `This car has a ${engine} engine.`
    }

    setGPS(gps: boolean): void {
        this.manual.gpsInstructions = `This car has ${gps ? 'a' : 'no'} GPS.`
    }

    setSeats(seats: number): void {
        this.manual.seatFeatures = `This car has ${seats} seats.`
    }

    setTripComputer(tripComputer: boolean): void {
        this.manual.tripComputerInstructions = `This car has ${tripComputer ? 'a' : 'no'} trip computer.`
    }

    getProduct(): Manual {
        const product = this.manual;
        this.reset();
        return product;
    }

}

export {CarManualBuilder};