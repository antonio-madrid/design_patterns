import {RemoteServiceInterface} from "../interfaces/RemoteServiceInterface";

class ConcreteRemoteService implements RemoteServiceInterface {
    public async runRemoteOperation(): Promise<void> {
        return new Promise(() => console.log('Executing an operation in a remote server...'));
    }
}

export { ConcreteRemoteService };