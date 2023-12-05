import {ServiceInterface} from "src/Basic_Patterns/Structural_Patterns/Proxy/Protection_Proxy/code/interfaces/ServiceInterface";

class ConcreteService implements  ServiceInterface {
    public run(): void {
        console.log('Running the Concrete Service operation.');
    }
}

export { ConcreteService };