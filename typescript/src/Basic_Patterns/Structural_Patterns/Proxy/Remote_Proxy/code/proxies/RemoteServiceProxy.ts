import {RemoteServiceInterface} from "src/Basic_Patterns/Structural_Patterns/Proxy/Remote_Proxy/code/interfaces/RemoteServiceInterface";
import {ConcreteRemoteService} from "src/Basic_Patterns/Structural_Patterns/Proxy/Remote_Proxy/code/services/ConcreteRemoteService";

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