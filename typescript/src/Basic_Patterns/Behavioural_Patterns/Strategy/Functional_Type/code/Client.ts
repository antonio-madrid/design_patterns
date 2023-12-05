import {Context} from "src/Basic_Patterns/Behavioural_Patterns/Strategy/Functional_Type/code/Context";
import {
    addStrategy,
    divideStrategy,
    multiplyStratety,
    Strategy,
    subtractStrategy
} from "src/Basic_Patterns/Behavioural_Patterns/Strategy/Functional_Type/code/Strategies";

const context = new Context(addStrategy);
let result = context.executeStrategy(3, 4);
console.log(result);

context.setStrategy(subtractStrategy);
result = context.executeStrategy(3, 2);
console.log(result);

context.setStrategy(multiplyStratety);
result = context.executeStrategy(3, 2);
console.log(result);

context.setStrategy(divideStrategy);
result = context.executeStrategy(3, 2);
console.log(result);

// Alternative implementation without Context class

function executeStrategy(strategy: Strategy, numberA: number, numberB: number): number {
    return strategy(numberA, numberB);
}

result = executeStrategy(addStrategy, 3, 4);
console.log(result);

result = executeStrategy(subtractStrategy, 3, 2);
console.log(result);

result = executeStrategy(multiplyStratety, 3, 2);
console.log(result);

result = executeStrategy(divideStrategy, 3, 2);
console.log(result);

