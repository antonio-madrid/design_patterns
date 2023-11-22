import {Subject} from "src/Basic_Patterns/Behavioural_Patterns/Observer/Concept/code/subjects/Subject";
import {Observer} from "src/Basic_Patterns/Behavioural_Patterns/Observer/Concept/code/observers/Observer";

class ConcreteSubject implements Subject {
    public state!: number;

    private observers: Observer[] = [];

    public attach(observer: Observer) {
        const isExist = this.observers.includes(observer);
        if (isExist) {
            return console.log('Subject: Observer has been attached already.');
        }

        console.log('Subject: Attached an observer.');
        this.observers.push(observer);
    }

    public detach(observer: Observer) {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return console.log('Subject: Nonexistent observer.');
        }

        this.observers.splice(observerIndex, 1);
        console.log('Subject: Detached an observer.');
    }

    public notify() {
        console.log('Subject: Notifying observers...');
        for (const observer of this.observers) {
            observer.update(this);
        }
    }

    public someBusinessLogic() {
        console.log('\nSubject: I\'m doing something important.');
        this.state = Math.floor(Math.random() * (10 + 1));

        console.log(`Subject: My state has just changed to: ${this.state}`);
        this.notify();
    }
}

export {ConcreteSubject};