import {Car} from "src/Basic_Patterns/Structural_Patterns/Decorator/Vehicle_Improver/code/Car";
import {
    SportPackageDecorator
} from "src/Basic_Patterns/Structural_Patterns/Decorator/Vehicle_Improver/code/decorators/SportPackageDecorator";

const basicCar = new Car();
const sportCar = new SportPackageDecorator(basicCar);

console.log(sportCar.getDescription());
console.log(sportCar.getCost());
