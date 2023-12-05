import {Subscriber} from "src/Basic_Patterns/Behavioural_Patterns/Observer/News_Publisher/code/observers/Subscriber";

/** Concrete Subject */
class NewsAgency {
    private subscribers: Subscriber[] = [];

    public publishNews(news: string): void {
        console.log(`NewsAgency: Publishing news - ${news}`);
        for (const subscriber of this.subscribers) {
            subscriber.receive(news);
        }
    }

    public addSubscriber(subscriber: Subscriber): void {
        this.subscribers.push(subscriber);
    }

    public removeSubscriber(subscriber: Subscriber): void {
        const index = this.subscribers.indexOf(subscriber);
        if (index > -1) {
            this.subscribers.splice(index, 1);
        }
    }
}

export {NewsAgency};