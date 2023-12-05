import {Strategy} from "src/Basic_Patterns/Behavioural_Patterns/Strategy/Calculation_Strategy/code/strategies/Strategy";

class ConcreteStrategySubtract implements Strategy {
    public execute(a: number, b: number): number {
        return a - b;
    }
}

export {ConcreteStrategySubtract};