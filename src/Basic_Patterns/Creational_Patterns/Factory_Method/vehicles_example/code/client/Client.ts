import {CarFactory} from "../creators/CarFactory";
import {VehicleFactory} from "../creators/VehicleFactory";
import {MotorcycleFactory} from "../creators/MotorcycleFactory";

const carFactory: VehicleFactory = new CarFactory();
carFactory.startVehicleEngine();

const motorcycleFactory: VehicleFactory = new MotorcycleFactory();
motorcycleFactory.startVehicleEngine();