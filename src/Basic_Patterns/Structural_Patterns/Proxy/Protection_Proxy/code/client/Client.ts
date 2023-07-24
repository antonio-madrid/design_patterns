import {ServiceInterface} from "../interfaces/ServiceInterface";
import {AccessControlProxy} from "../proxies/AccessControlProxy";

const proxy: ServiceInterface = new AccessControlProxy();
proxy.run();