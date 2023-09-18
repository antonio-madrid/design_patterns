import {Originator} from "src/Basic_Patterns/Behavioural_Patterns/Memento/Strict_Interface_Encapsulation/code/Originator";
import {Caretaker} from "src/Basic_Patterns/Behavioural_Patterns/Memento/Strict_Interface_Encapsulation/code/Caretaker";
import {IOriginator} from "src/Basic_Patterns/Behavioural_Patterns/Memento/Strict_Interface_Encapsulation/code/IOriginator";

const originator: IOriginator = new Originator();
const caretaker = new Caretaker();

originator.type('\n\tFirst text line');
caretaker.addMemento(originator.save());

originator.type('\n\tSecond text line');
caretaker.addMemento(originator.save());

originator.type('\n\tThird text line');

console.log(`Current status: ${originator.getContent()}`);

caretaker.restoreMemento(1);
console.log(`Current status after undo operation: ${originator.getContent()}`);