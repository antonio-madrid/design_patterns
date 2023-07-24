import {Mail} from "./Mail";
import {Transport} from "../products/Transport";
import {Ship} from "../products/Ship";

class SeaMail extends Mail {
    public createTransport(type?: string): Transport {
        return new Ship();
    }

}

export { SeaMail };