import {Transport} from "./Transport";

class Train implements Transport {
    public deliver(): void {
        console.log('Delivering by train...');
    }
}

export { Train };