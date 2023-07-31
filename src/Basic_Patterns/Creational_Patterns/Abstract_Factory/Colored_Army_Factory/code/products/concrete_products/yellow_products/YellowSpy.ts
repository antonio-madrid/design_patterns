import {Spy} from "../../interfaces/Spy";

/** Concrete Product of the yellow family */
class YellowSpy implements Spy {
    public gatherInfo(): void {
        console.log('Yellow spy is gathering information...');
    }
}

export { YellowSpy };