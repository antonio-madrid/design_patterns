import {Strategy} from "src/Basic_Patterns/Behavioural_Patterns/Strategy/Calculation_Strategy/code/strategies/Strategy";

class Context {
    private strategy: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    public setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }

    public executeStrategy(a: number, b: number): number {
        return this.strategy.execute(a, b);
    }
}

export {Context};