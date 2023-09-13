import {IMemento} from "./IMemento";

class Originator {
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

    public save(): IMemento {
        return new class Memento implements IMemento {
            constructor(
                private originator: Originator,
                private state: string) {}

            public restore() {
                this.originator.setState(this.state);
            }
        }(this, this.content);
    }
}

export { Originator };