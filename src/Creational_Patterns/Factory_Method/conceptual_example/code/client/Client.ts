import {Creator} from "../creators/Creator";
import {ConcreteCreator1} from "../creators/ConcreteCreator1";
import {ConcreteCreator2} from "../creators/ConcreteCreator2";

function clientCode(creator: Creator): void {
    console.log('Client: I\'m not aware of the creator\'s class, but it still works.');
    console.log(creator.someOperation());
}

console.log('App: Launched with the ConcreteCreator1');
clientCode(new ConcreteCreator1());
console.log('');

console.log('App: Launched with the ConcreteCreator2');
clientCode(new ConcreteCreator2());