import {ServiceInterface} from "../interfaces/ServiceInterface";
import {HeavyService} from "../services/HeavyService";

class HeavyProxyService implements ServiceInterface {
    private heavyService: HeavyService | null = null;
    private counter?: number;

    constructor() {
        this.counter = 0;
    }

    public executeOperation(): void {
        console.log('Executing Proxy operations...')
        if (!this.heavyService) {
            console.log('First time access to HeavyService object.')
            this.heavyService = new HeavyService();
            console.log('HeavyService object cached, next time will be quicker.')
        }
        this.heavyService.executeOperation();
    }
}

export { HeavyProxyService };