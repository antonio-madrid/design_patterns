import {SmartReferenceProxy} from "src/Basic_Patterns/Structural_Patterns/Proxy/Smart_reference_Proxy/code/proxies/SmartReferenceProxy";

const proxy = new SmartReferenceProxy();
proxy.addService();
proxy.exec();
proxy.freeService();
proxy.exec();