import {ServiceInterface} from "../interfaces/ServiceInterface";

class ConcreteService implements  ServiceInterface {
    public run(): void {
        console.log('Running the Concrete Service operation.');
    }
}

export { ConcreteService };