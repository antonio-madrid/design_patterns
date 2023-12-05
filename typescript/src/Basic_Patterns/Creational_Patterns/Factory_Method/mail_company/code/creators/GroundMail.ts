import {Mail} from "src/Basic_Patterns/Creational_Patterns/Factory_Method/mail_company/code/creators/Mail";
import {Transport} from "src/Basic_Patterns/Creational_Patterns/Factory_Method/mail_company/code/products/Transport";
import {Truck} from "src/Basic_Patterns/Creational_Patterns/Factory_Method/mail_company/code/products/Truck";
import {Train} from "src/Basic_Patterns/Creational_Patterns/Factory_Method/mail_company/code/products/Train";

class GroundMail extends Mail {
    public createTransport(type?: string): Transport {
        switch (type) {
            case 'Truck':
                return new Truck();
            case 'Train':
                return new Train();
            default:
                throw new Error('Transport type not valid.');
        }
    }
}

export { GroundMail };