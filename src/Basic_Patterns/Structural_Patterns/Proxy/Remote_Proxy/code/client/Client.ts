import {RemoteServiceInterface} from "../interfaces/RemoteServiceInterface";
import {RemoteServiceProxy} from "../proxies/RemoteServiceProxy";

const proxy: RemoteServiceInterface = new RemoteServiceProxy();
proxy.runRemoteOperation().then();