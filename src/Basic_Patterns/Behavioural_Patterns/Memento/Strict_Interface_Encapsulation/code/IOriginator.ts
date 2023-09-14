import {IMemento} from "./IMemento";

interface IOriginator {
    save(): IMemento
    type(words: string): void;
    getContent(): string;
}

export { IOriginator };