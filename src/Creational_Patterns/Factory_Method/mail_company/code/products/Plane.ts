import {Transport} from "./Transport";

class Plane implements Transport {
    public deliver(): void {
        console.log('Delivering by plane...');
    }
}

export { Plane };