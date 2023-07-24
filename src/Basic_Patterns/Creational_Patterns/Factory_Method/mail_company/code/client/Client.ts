import {GroundMail} from "../creators/GroundMail";
import {AirMail} from "../creators/AirMail";
import {Mail} from "../creators/Mail";
import {Transport} from "../products/Transport";
import {SeaMail} from "../creators/SeaMail";

let transport_factory: Mail = new GroundMail();
let vehicle: Transport = transport_factory.createTransport('Truck');
vehicle.deliver(); // Delivering by Truck

vehicle = transport_factory.createTransport('Train');
vehicle.deliver(); // Delivering by Train

transport_factory = new AirMail();
vehicle = transport_factory.createTransport();
vehicle.deliver(); // Delivering by plane

transport_factory = new SeaMail();
vehicle = transport_factory.createTransport();
vehicle.deliver(); // Delivering by ship