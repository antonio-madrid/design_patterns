import {Director} from "src/Basic_Patterns/Creational_Patterns/Builder/Car_Builder/code/Director";
import {CarBuilder} from "src/Basic_Patterns/Creational_Patterns/Builder/Car_Builder/code/builders/CarBuilder";
import {
    CarManualBuilder
} from "src/Basic_Patterns/Creational_Patterns/Builder/Car_Builder/code/builders/CarManualBuilder";

const director = new Director();

const carBuilder = new CarBuilder();
director.constructSportsCar(carBuilder);
const car = carBuilder.getProduct();
console.log(JSON.stringify(car))

const manualBuilder = new CarManualBuilder();
director.constructSportsCar(manualBuilder);
const manual = manualBuilder.getProduct();
console.log(JSON.stringify(manual));
