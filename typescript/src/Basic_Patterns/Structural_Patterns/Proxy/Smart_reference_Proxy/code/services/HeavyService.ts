import {ServiceInterface} from "src/Basic_Patterns/Structural_Patterns/Proxy/Smart_reference_Proxy/code/interfaces/ServiceInterface";

class HeavyService implements ServiceInterface {
    public exec(): void {
        console.log('Executing heavy operations...');
    }
}

export { HeavyService };