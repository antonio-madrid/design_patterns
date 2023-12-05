import {Subject} from "src/Basic_Patterns/Structural_Patterns/Proxy/proxy_concept/code/interfaces/Subject";

/** Service class */
class RealSubject implements Subject {
    public request(): void {
        console.log('RealSubject: Handling request...');
    }
}

export { RealSubject };