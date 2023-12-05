import {Publisher} from "src/Basic_Patterns/Behavioural_Patterns/Observer/Concept/code/publishers/Publisher";
import {Observer} from "src/Basic_Patterns/Behavioural_Patterns/Observer/Concept/code/observers/Observer";

class ConcretePublisher implements Publisher {
    public state!: number;

    private observers: Observer[] = [];

    public attach(observer: Observer) {
        const isExist = this.observers.includes(observer);
        if (isExist) {
            return console.log('Publisher: Observer has been attached already.');
        }

        console.log('Publisher: Attached an observer.');
        this.observers.push(observer);
    }

    public detach(observer: Observer) {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return console.log('Publisher: Nonexistent observer.');
        }

        this.observers.splice(observerIndex, 1);
        console.log('Publisher: Detached an observer.');
    }

    public notify() {
        console.log('Publisher: Notifying observers...');
        for (const observer of this.observers) {
            observer.update(this);
        }
    }

    public someBusinessLogic() {
        console.log('\nPublisher: I\'m doing something important.');
        this.state = Math.floor(Math.random() * (10 + 1));

        console.log(`Publisher: My state has just changed to: ${this.state}`);
        this.notify();
    }
}

export {ConcretePublisher};