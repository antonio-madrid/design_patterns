import {Spy} from "../../interfaces/Spy";

/** Concrete Product of the blue family */
class BlueSpy implements Spy {
    public gatherInfo(): void {
        console.log('Blue spy is gathering information...');
    }
}

export { BlueSpy };