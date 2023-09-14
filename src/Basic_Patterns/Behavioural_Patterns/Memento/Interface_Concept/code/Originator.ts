import {IMemento} from "./IMemento";
import {ConcreteMemento} from "./ConcreteMemento";

class Originator {
    private state: string;

    constructor(state: string) {
        this.state = state;
        console.log(`Originator: My initial state is: ${state}`);
    }

    private generateRandomString(length: number = 10): string {
        const charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

        return Array
            .from({ length })
            .map(() => charSet.charAt(Math.floor(Math.random() * charSet.length)))
            .join('');
    }

    public doSomething(): void {
        console.log('Originator: I\'m doing something important.');
        this.state = this.generateRandomString(30);
        console.log(`Originator: and my state has changed to: ${this.state}`);
    }



    public save(): IMemento {
        return new ConcreteMemento(this.state);
    }

    public restore(memento: IMemento): void {
        this.state = (memento as ConcreteMemento).getState();
        console.log(`Originator: My state has changed to: ${this.state}`);
    }

}

export { Originator };