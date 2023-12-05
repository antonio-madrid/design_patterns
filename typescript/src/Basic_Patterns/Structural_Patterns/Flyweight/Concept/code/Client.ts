import {FlyweightFactory} from "src/Basic_Patterns/Structural_Patterns/Flyweight/Concept/code/FlyweightFactory";
import {Context} from "src/Basic_Patterns/Structural_Patterns/Flyweight/Concept/code/Context";

const factory = new FlyweightFactory([
    'Block',
    'Circle',
    'Triangle',
]);
factory.listFlyweights();

const context1 = new Context('red', factory.getFlyweight('Block'));
const context2 = new Context('blue', factory.getFlyweight('Triangle'));
const context3 = new Context('orange', factory.getFlyweight('Block'));

context1.operation();
context2.operation();
context3.operation()

factory.listFlyweights();



