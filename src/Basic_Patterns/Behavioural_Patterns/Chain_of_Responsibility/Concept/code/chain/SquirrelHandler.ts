import {
    AbstractHandler
} from "src/Basic_Patterns/Behavioural_Patterns/Chain_of_Responsibility/Concept/code/chain/AbstractHandler";

/** Concrete Handler */
class SquirrelHandler extends AbstractHandler {
    public handle(request: string): string {
        if (request === 'Nut') {
            return `Squirrle: I'll eat the ${request}`;
        }
        return super.handle(request);
    }
}

export { SquirrelHandler };