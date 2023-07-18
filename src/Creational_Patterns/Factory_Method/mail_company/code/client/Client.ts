import {GroundMail} from "../creators/GroundMail";
import {AirMail} from "../creators/AirMail";
import {Mail} from "../creators/Mail";
import {Transport} from "../products/Transport";

const groundMail: Mail = new GroundMail();
let vehicle: Transport = groundMail.createTransport('Truck');
vehicle.deliver(); // Delivering by Truck

vehicle = groundMail.createTransport('Train');
vehicle.deliver(); // Delivering by Train

const airMail: Mail = new AirMail();
vehicle = airMail.createTransport();
vehicle.deliver(); // Delivering by plane