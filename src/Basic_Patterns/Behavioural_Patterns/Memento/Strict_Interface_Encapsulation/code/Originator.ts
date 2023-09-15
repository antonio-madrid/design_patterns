import {IMemento} from "./IMemento";
import { IOriginator } from "./IOriginator";

class Originator implements IOriginator {
    private content: string = '';

    constructor() {}

    private setState(state: string): void {
        this.content = state;
    }

    public type(words: string) {
        this.content += ` ${words}`;
    }

    public getContent(): string {
        return this.content;
    }

    /** Memento is taking the responsibility to restore its linked Originator */
    public save(): IMemento {
        return new class Memento implements IMemento {
            constructor(
                private originator: Originator,
                private state: string) {}


            /** memento can access to its Originator private methods */
            public restore() {
                this.originator.setState(this.state);
            }
        }(this, this.content);
    }
}

export { Originator };