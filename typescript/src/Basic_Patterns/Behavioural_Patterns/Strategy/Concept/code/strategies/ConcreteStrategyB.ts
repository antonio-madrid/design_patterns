import {Strategy} from "src/Basic_Patterns/Behavioural_Patterns/Strategy/Concept/code/strategies/Strategy";

class ConcreteStrategyB implements Strategy {
    public doAlgorithm(data: string[]): string[] {
        return data.reverse();
    }
}

export {ConcreteStrategyB};