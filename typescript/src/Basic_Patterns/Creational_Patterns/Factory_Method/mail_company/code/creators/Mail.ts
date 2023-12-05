import {Transport} from "src/Basic_Patterns/Creational_Patterns/Factory_Method/mail_company/code/products/Transport";

abstract class Mail {
    abstract createTransport(type?: string): Transport;
}

export { Mail };