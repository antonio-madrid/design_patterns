import {Mail} from "./Mail";
import {Transport} from "../products/Transport";
import {Truck} from "../products/Truck";
import {Train} from "../products/Train";

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