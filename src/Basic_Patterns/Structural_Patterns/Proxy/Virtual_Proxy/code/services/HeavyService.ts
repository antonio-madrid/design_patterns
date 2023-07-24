import {ServiceInterface} from "../interfaces/ServiceInterface";

class HeavyService implements ServiceInterface {
    public constructor() {
        console.log('Service starting up, this action will take some time...');
        // Processing time simulation
        this.heavyInitialization();
        console.log('Service started.')
    }

    private heavyInitialization(): void {
        let initialization_time: number = 3;
        while (initialization_time >= 0) {
            let i: number = -1e9;
            while (i < 1e9) i++;
            initialization_time--;
        }
    }

    public executeOperation(): void {
        console.log('Executing the light service operation...');
    }
}

export { HeavyService };