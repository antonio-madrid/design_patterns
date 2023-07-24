import {ServiceInterface} from "../interfaces/ServiceInterface";
import {ConcreteService} from "../services/ConcreteService";

class AccessControlProxy implements ServiceInterface {
    private concreteService: ConcreteService = new ConcreteService();

    public run(): void {
        if (this.validateCredentials()) {
            console.log('Credentials validated. Operation allowed...');
            this.concreteService.run();
        } else {
            console.log('Access denied: not valid credentials');
        }
    }

    private validateCredentials(): boolean {
        console.log('Checking permissions to execute this operations.')
        return true;
    }
}

export { AccessControlProxy };