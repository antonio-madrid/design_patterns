import {ServiceInterface} from "src/Basic_Patterns/Structural_Patterns/Proxy/Protection_Proxy/code/interfaces/ServiceInterface";
import {AccessControlProxy} from "src/Basic_Patterns/Structural_Patterns/Proxy/Protection_Proxy/code/proxies/AccessControlProxy";

const proxy: ServiceInterface = new AccessControlProxy();
proxy.run();