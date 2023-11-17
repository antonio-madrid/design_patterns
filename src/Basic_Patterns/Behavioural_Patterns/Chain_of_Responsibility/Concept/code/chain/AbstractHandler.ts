import {Handler} from "src/Basic_Patterns/Behavioural_Patterns/Chain_of_Responsibility/Concept/code/chain/Handler";

/** Base Handler - Optional class */
abstract class AbstractHandler implements Handler {
    private nextHandler?: Handler;

    public setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }

    public handle(request: string): string {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }

        return '';
    }
}

export { AbstractHandler };