import {Transport} from "../products/Transport";

abstract class Mail {
    abstract createTransport(type?: string): Transport;
}

export { Mail };