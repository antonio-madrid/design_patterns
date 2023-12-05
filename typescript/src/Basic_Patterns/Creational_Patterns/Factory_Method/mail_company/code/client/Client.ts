import {GroundMail} from "src/Basic_Patterns/Creational_Patterns/Factory_Method/mail_company/code/creators/GroundMail";
import {AirMail} from "src/Basic_Patterns/Creational_Patterns/Factory_Method/mail_company/code/creators/AirMail";
import {Mail} from "src/Basic_Patterns/Creational_Patterns/Factory_Method/mail_company/code/creators/Mail";
import {Transport} from "src/Basic_Patterns/Creational_Patterns/Factory_Method/mail_company/code/products/Transport";
import {SeaMail} from "src/Basic_Patterns/Creational_Patterns/Factory_Method/mail_company/code/creators/SeaMail";

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