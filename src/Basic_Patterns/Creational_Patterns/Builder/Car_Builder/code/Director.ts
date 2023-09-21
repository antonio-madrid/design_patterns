import {Builder} from "src/Basic_Patterns/Creational_Patterns/Builder/Car_Builder/code/builders/Builder";

class Director {
    constructSportsCar(builder: Builder): void {
        builder.reset();
        builder.setSeats(2);
        builder.setEngine('SportEngine');
        builder.setTripComputer(true);
        builder.setGPS(true);
    }
}

export { Director };