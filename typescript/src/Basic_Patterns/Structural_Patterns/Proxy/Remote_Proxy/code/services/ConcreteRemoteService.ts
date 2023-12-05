import {RemoteServiceInterface} from "src/Basic_Patterns/Structural_Patterns/Proxy/Remote_Proxy/code/interfaces/RemoteServiceInterface";

class ConcreteRemoteService implements RemoteServiceInterface {
    public async runRemoteOperation(): Promise<void> {
        return new Promise(() => console.log('Executing an operation in a remote server...'));
    }
}

export { ConcreteRemoteService };