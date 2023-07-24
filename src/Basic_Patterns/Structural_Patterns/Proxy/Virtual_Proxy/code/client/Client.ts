import {ServiceInterface} from "../interfaces/ServiceInterface";
import {HeavyProxyService} from "../proxies/HeavyProxyService";

const proxy: ServiceInterface = new HeavyProxyService();

proxy.executeOperation();

proxy.executeOperation();