import {Transport} from "./Transport";

class Truck implements Transport {
    public deliver(): void {
        console.log('Delivering by Truck...');
    }
}

export { Truck };