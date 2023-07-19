import {Transport} from "./Transport";

class Ship implements Transport {
    public deliver(): void {
        console.log('Delivering by ship...');
    }
}

export { Ship };