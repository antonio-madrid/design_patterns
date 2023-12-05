import {Subscriber} from "src/Basic_Patterns/Behavioural_Patterns/Observer/News_Publisher/code/observers/Subscriber";

/** Concrete Observer */
class Person implements Subscriber {
    constructor(private name: string) {}

    public receive(news: string): void {
        console.log(`${this.name} received news: ${news}`);
    }
}

export {Person};