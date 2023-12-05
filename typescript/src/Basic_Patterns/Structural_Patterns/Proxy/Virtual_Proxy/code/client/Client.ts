import {ServiceInterface} from "src/Basic_Patterns/Structural_Patterns/Proxy/Virtual_Proxy/code/interfaces/ServiceInterface";
import {HeavyProxyService} from "src/Basic_Patterns/Structural_Patterns/Proxy/Virtual_Proxy/code/proxies/HeavyProxyService";

const proxy: ServiceInterface = new HeavyProxyService();

proxy.executeOperation();

proxy.executeOperation();