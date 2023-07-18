import {Mail} from "./Mail";
import {Transport} from "../products/Transport";
import {Plane} from "../products/Plane";

class AirMail extends Mail {
    public createTransport(type?: string): Transport {
        return new Plane();
    }
}

export { AirMail };