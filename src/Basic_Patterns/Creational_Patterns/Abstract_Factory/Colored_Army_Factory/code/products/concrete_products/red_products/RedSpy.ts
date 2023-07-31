import {Spy} from "../../interfaces/Spy";

/** Concrete Product of the red family */
class RedSpy implements Spy {
    public gatherInfo(): void {
        console.log('Red spy is gathering information...');
    }
}

export { RedSpy };