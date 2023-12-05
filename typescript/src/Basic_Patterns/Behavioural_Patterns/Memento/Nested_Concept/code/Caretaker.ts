import {Originator} from "src/Basic_Patterns/Behavioural_Patterns/Memento/Nested_Concept/code/Originator";

/** This caretaker is responsible for storing the memento's history. */
class Caretaker {
    /** Nested classes types in TS are accessed in the Array way */
    private states: Originator['Memento'][] = [];

    public addMemento(memento: Originator['Memento']) {
        this.states.push(memento);
    }

    public getMemento(index: number): Originator['Memento']{
       return this.states[index]!;
    }
}

export { Caretaker };