import {Strategy} from "src/Basic_Patterns/Behavioural_Patterns/Strategy/Functional_Type/code/Strategies";

class Context {
    private strategy: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    public setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }

    public executeStrategy(numberA: number, numberB: number): number {
        return this.strategy(numberA, numberB);
    }
}

export {Context};