import {
    AbstractHandler
} from "src/Basic_Patterns/Behavioural_Patterns/Chain_of_Responsibility/Concept/code/chain/AbstractHandler";

/** Concrete Handler */
class MonkeyHandler extends AbstractHandler {
    public handle(request: string): string {
        if (request === 'Banana') {
            return `Monkey: I'll eat the ${request}`;
        }
        return super.handle(request);
    }
}

export { MonkeyHandler };