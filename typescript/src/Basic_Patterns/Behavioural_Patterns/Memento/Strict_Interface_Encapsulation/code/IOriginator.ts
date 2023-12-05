import {IMemento} from "src/Basic_Patterns/Behavioural_Patterns/Memento/Strict_Interface_Encapsulation/code/IMemento";

interface IOriginator {
    save(): IMemento
    type(words: string): void;
    getContent(): string;
}

export { IOriginator };