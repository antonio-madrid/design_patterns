import {Originator} from "src/Basic_Patterns/Behavioural_Patterns/Memento/Nested_Concept/code/Originator";
import {Caretaker} from "src/Basic_Patterns/Behavioural_Patterns/Memento/Nested_Concept/code/Caretaker";

const originator = new Originator();
const caretaker = new Caretaker();

originator.type('First text line');
caretaker.addMemento(originator.save());

originator.type('Second text line');
caretaker.addMemento(originator.save());

originator.type('Third text line');

console.log(`Current status: ${originator.getContent()}`);

originator.restore(caretaker.getMemento(1));
console.log(`Current status after undo operation: ${originator.getContent()}`);