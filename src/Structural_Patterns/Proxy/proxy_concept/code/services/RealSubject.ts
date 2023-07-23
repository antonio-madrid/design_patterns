import {Subject} from "../interfaces/Subject";

/** Service class */
class RealSubject implements Subject {
    public request(): void {
        console.log('RealSubject: Handling request...');
    }
}

export { RealSubject };