import {SmartReferenceProxy} from "../proxies/SmartReferenceProxy";

const proxy = new SmartReferenceProxy();
proxy.addService();
proxy.exec();
proxy.freeService();
proxy.exec();