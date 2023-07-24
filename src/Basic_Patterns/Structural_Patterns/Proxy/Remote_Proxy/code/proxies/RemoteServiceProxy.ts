import {RemoteServiceInterface} from "../interfaces/RemoteServiceInterface";
import {ConcreteRemoteService} from "../services/ConcreteRemoteService";

class RemoteServiceProxy implements RemoteServiceInterface {
    private concreteRemoteService: ConcreteRemoteService = new ConcreteRemoteService();

    public runRemoteOperation(): Promise<void> {
        this.registerRequest();
        return this.concreteRemoteService.runRemoteOperation();
    }

    private registerRequest() {
        console.log('Registering the current request...');
    }
}

export { RemoteServiceProxy };