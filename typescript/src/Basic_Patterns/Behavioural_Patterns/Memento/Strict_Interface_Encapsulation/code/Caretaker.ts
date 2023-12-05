import {IMemento} from "src/Basic_Patterns/Behavioural_Patterns/Memento/Strict_Interface_Encapsulation/code/IMemento";

class Caretaker {
    private states: IMemento[] = [];

    public addMemento(memento: IMemento) {
        this.states.push(memento);
    }

    public restoreMemento(index: number): void {
        if (index < 0 || index >= this.states.length) {
            return;
        }
        this.states[index].restore();
    }
}

export { Caretaker };