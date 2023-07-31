import {Spy} from "../../interfaces/Spy";

/** Concrete Product of the green family */
class GreenSpy implements Spy {
    public gatherInfo(): void {
        console.log('Green spy is gathering information...');
    }
}

export { GreenSpy };