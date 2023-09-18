import {IMemento} from "src/Basic_Patterns/Behavioural_Patterns/Memento/Interface_Concept/code/IMemento";
import {Originator} from "src/Basic_Patterns/Behavioural_Patterns/Memento/Interface_Concept/code/Originator";

class CareTaker {
    private mementos: IMemento[] = [];
    private originator: Originator;

    constructor(originator: Originator) {
        this.originator = originator;
    }

    public backup(): void {
        console.log('\nCaretaker: Saving Originator\'s state...');
        this.mementos.push(this.originator.save());
    }

    public undo(): void {
        if (!this.mementos.length) {
            return;
        }

        const memento: IMemento = this.mementos.pop()!;

        console.log(`Caretaker: Restoring state to: ${memento.getName()}`)
        this.originator.restore(memento);
    }

    public showHistory(): void {
        console.log('Caretaker: Here\'s the list of mementos:');
        for (const memento of this.mementos) {
            console.log(memento.getName());
        }
    }
}

export {CareTaker};