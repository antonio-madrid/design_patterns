import {Transport} from "src/Basic_Patterns/Creational_Patterns/Factory_Method/mail_company/code/products/Transport";

class Plane implements Transport {
    public deliver(): void {
        console.log('Delivering by plane...');
    }
}

export { Plane };