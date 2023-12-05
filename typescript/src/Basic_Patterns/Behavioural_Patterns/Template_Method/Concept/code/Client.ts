import {AbstractClass} from "src/Basic_Patterns/Behavioural_Patterns/Template_Method/Concept/code/AbstractClass";
import {ConcreteClass1} from "src/Basic_Patterns/Behavioural_Patterns/Template_Method/Concept/code/ConcreteClass1";
import {ConcreteClass2} from "src/Basic_Patterns/Behavioural_Patterns/Template_Method/Concept/code/ConcreteClass2";

function clientCode(abstractClass: AbstractClass) {
    abstractClass.templateMethod();
}

console.log('Same client code can work with different subclasses:');
clientCode(new ConcreteClass1());
console.log('');

console.log('Same client code can work with different subclasses:');
clientCode(new ConcreteClass2());