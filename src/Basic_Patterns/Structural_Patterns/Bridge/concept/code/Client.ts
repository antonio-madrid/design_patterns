import {
    ConcreteImplementationA
} from "src/Basic_Patterns/Structural_Patterns/Bridge/concept/code/implementations/ConcreteImplementationA";
import {Abstraction} from "src/Basic_Patterns/Structural_Patterns/Bridge/concept/code/abstractions/Abstraction";
import {
    ConcreteImplementationB
} from "src/Basic_Patterns/Structural_Patterns/Bridge/concept/code/implementations/ConcreteImplementationB";
import {ExtendedAbstraction} from "src/Basic_Patterns/Structural_Patterns/Bridge/concept/code/abstractions/ExtendedAbstraction";

function clientCode(abstraction: Abstraction) {
  console.log(abstraction.operation());
}

let implementation = new ConcreteImplementationA();
let abstraction = new Abstraction(implementation);
clientCode(abstraction);

console.log('');

implementation = new ConcreteImplementationB();
abstraction = new ExtendedAbstraction(implementation);
clientCode(abstraction);
