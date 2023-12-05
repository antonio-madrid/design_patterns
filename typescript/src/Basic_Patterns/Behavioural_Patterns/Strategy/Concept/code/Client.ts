import {Context} from "src/Basic_Patterns/Behavioural_Patterns/Strategy/Concept/code/Context";
import {ConcreteStrategyA} from "src/Basic_Patterns/Behavioural_Patterns/Strategy/Concept/code/strategies/ConcreteStrategyA";
import {ConcreteStrategyB} from "src/Basic_Patterns/Behavioural_Patterns/Strategy/Concept/code/strategies/ConcreteStrategyB";

const context = new Context(new ConcreteStrategyA());
console.log('Client: Strategy is set to normal sorting.');
context.doSomeBussinesLogic();

console.log('');

console.log('Client: Strategy is set to reverse sorting.');
context.setStrategy(new ConcreteStrategyB());
context.doSomeBussinesLogic();