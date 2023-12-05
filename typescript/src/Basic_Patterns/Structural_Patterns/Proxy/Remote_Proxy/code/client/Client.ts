import {RemoteServiceInterface} from "src/Basic_Patterns/Structural_Patterns/Proxy/Remote_Proxy/code/interfaces/RemoteServiceInterface";
import {RemoteServiceProxy} from "src/Basic_Patterns/Structural_Patterns/Proxy/Remote_Proxy/code/proxies/RemoteServiceProxy";

const proxy: RemoteServiceInterface = new RemoteServiceProxy();
proxy.runRemoteOperation().then();