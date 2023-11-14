import {ConcreteComponent} from "src/Basic_Patterns/Structural_Patterns/Decorator/Concept/code/components/ConcreteComponent";
import {ConcreteDecoratorA} from "src/Basic_Patterns/Structural_Patterns/Decorator/Concept/code/Decorators/ConcreteDecoratorA";
import {ConcreteDecoratorB} from "src/Basic_Patterns/Structural_Patterns/Decorator/Concept/code/Decorators/ConcreteDecoratorB";
import {Component} from "src/Basic_Patterns/Structural_Patterns/Decorator/Concept/code/components/Component";

function clientCode(component: Component) {
  console.log(`RESULT: ${component.operation()}`);
}

const simple = new ConcreteComponent();
console.log("Client: I've got a simple component:");
clientCode(simple);
console.log('');

const decorator1 = new ConcreteDecoratorA(simple);
const decorator2 = new ConcreteDecoratorB(decorator1);
console.log("Client: Now I've got a decorated component:");
clientCode(decorator2);
