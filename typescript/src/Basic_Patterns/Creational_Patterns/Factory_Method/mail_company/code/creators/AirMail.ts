import {Mail} from "src/Basic_Patterns/Creational_Patterns/Factory_Method/mail_company/code/creators/Mail";
import {Transport} from "src/Basic_Patterns/Creational_Patterns/Factory_Method/mail_company/code/products/Transport";
import {Plane} from "src/Basic_Patterns/Creational_Patterns/Factory_Method/mail_company/code/products/Plane";

class AirMail extends Mail {
    public createTransport(type?: string): Transport {
        return new Plane();
    }
}

export { AirMail };