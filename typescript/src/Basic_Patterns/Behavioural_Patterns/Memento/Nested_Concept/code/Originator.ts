
/** TS doesn't support nested classes with exclusive access as Java.*/
class Originator {
    /** Declaring the nested class with a manual type */
    public Memento: { new (state: string): any; }

    private content: string = '';

    constructor() {
        /** Implementing the nested class.*/
        this.Memento = class {
            constructor(private state: string) {}

            private getState(): string {
                return this.state;
            }
        }
    }

    public type(words: string) {
        this.content += ` ${words}`;
    }

    public getContent(): string {
        return this.content;
    }

    /** Nested classes types in TS are accessed in the Array way */
    public save(): Originator['Memento'] {
        return new this.Memento(this.content);
    }

    public restore(memento: Originator['Memento']) {
        const innerMemento: any = memento;
        this.content = innerMemento.getState();
    }

}

export { Originator };