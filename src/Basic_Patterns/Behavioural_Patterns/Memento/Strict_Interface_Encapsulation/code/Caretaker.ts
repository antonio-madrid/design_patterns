import {IMemento} from "./IMemento";

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