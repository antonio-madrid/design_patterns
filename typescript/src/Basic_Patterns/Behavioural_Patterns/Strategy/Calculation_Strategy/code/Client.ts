import {Context} from "src/Basic_Patterns/Behavioural_Patterns/Strategy/Calculation_Strategy/code/Context";
import {
    ConcreteStrategyAdd
} from "src/Basic_Patterns/Behavioural_Patterns/Strategy/Calculation_Strategy/code/strategies/ConcreteStrategyAdd";
import {
    ConcreteStrategySubtract
} from "src/Basic_Patterns/Behavioural_Patterns/Strategy/Calculation_Strategy/code/strategies/ConcreteStrategySubtract";

const context = new Context(new ConcreteStrategyAdd());
console.log('Client: Strategy is set to addition.');
console.log(context.executeStrategy(3, 4));

console.log('');

console.log('Client: Strategy is set to subtraction.');
context.setStrategy(new ConcreteStrategySubtract());
console.log(context.executeStrategy(3, 4));