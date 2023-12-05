import {CarFactory} from "src/Basic_Patterns/Creational_Patterns/Factory_Method/vehicles_example/code/creators/CarFactory";
import {VehicleFactory} from "src/Basic_Patterns/Creational_Patterns/Factory_Method/vehicles_example/code/creators/VehicleFactory";
import {MotorcycleFactory} from "src/Basic_Patterns/Creational_Patterns/Factory_Method/vehicles_example/code/creators/MotorcycleFactory";

const carFactory: VehicleFactory = new CarFactory();
carFactory.startVehicleEngine();

const motorcycleFactory: VehicleFactory = new MotorcycleFactory();
motorcycleFactory.startVehicleEngine();