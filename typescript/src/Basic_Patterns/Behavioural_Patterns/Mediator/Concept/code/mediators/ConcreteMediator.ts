import {Mediator} from "src/Basic_Patterns/Behavioural_Patterns/Mediator/Concept/code/mediators/Mediator";
import {Component1} from "src/Basic_Patterns/Behavioural_Patterns/Mediator/Concept/code/components/Component1";
import {Component2} from "src/Basic_Patterns/Behavioural_Patterns/Mediator/Concept/code/components/Component2";

class ConcreteMediator implements Mediator {
    constructor(
        private component1: Component1,
        private component2: Component2
    ) {
        this.component1.setMediator(this);
        this.component2.setMediator(this);
    }

    public notify(sender: object, event: string) {
        if (event === 'A') {
            console.log('Mediator reacts on A and triggers following operations:');
            this.component2.doC();
        }

        if (event === 'D') {
            console.log('Mediator reacts on D and triggers following operations:');
            this.component1.doB();
            this.component2.doC();
        }
    }

}

export { ConcreteMediator };
