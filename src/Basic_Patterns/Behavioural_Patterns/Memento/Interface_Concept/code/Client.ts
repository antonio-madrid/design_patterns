import {Originator} from "src/Basic_Patterns/Behavioural_Patterns/Memento/Interface_Concept/code/Originator";
import {CareTaker} from "src/Basic_Patterns/Behavioural_Patterns/Memento/Interface_Concept/code/CareTaker";

const originator: Originator = new Originator('Super-duper-super-puper-super');
const caretaker: CareTaker = new CareTaker(originator);

caretaker.backup();
originator.doSomething();

caretaker.backup();
originator.doSomething();

caretaker.backup();
originator.doSomething();

console.log('');
caretaker.showHistory();

console.log('\nClient: Now, let\'s rollback');
caretaker.undo();

console.log('\nClient: Once more!\n');
caretaker.undo();