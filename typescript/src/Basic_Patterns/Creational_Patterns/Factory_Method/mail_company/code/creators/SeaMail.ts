import {Mail} from "src/Basic_Patterns/Creational_Patterns/Factory_Method/mail_company/code/creators/Mail";
import {Transport} from "src/Basic_Patterns/Creational_Patterns/Factory_Method/mail_company/code/products/Transport";
import {Ship} from "src/Basic_Patterns/Creational_Patterns/Factory_Method/mail_company/code/products/Ship";

class SeaMail extends Mail {
    public createTransport(type?: string): Transport {
        return new Ship();
    }

}

export { SeaMail };