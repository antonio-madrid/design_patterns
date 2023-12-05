import {Transport} from "src/Basic_Patterns/Creational_Patterns/Factory_Method/mail_company/code/products/Transport";

class Ship implements Transport {
    public deliver(): void {
        console.log('Delivering by ship...');
    }
}

export { Ship };