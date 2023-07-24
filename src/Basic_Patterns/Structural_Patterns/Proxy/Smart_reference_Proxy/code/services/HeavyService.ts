import {ServiceInterface} from "../interfaces/ServiceInterface";

class HeavyService implements ServiceInterface {
    public exec(): void {
        console.log('Executing heavy operations...');
    }
}

export { HeavyService };