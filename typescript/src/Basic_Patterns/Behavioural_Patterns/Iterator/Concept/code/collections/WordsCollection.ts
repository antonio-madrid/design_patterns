import {Aggregator} from "src/Basic_Patterns/Behavioural_Patterns/Iterator/Concept/code/collections/Aggregator";
import {Iterator} from "src/Basic_Patterns/Behavioural_Patterns/Iterator/Concept/code/iterators/Iterator";
import {
    AlphabeticalOrderIterator
} from "src/Basic_Patterns/Behavioural_Patterns/Iterator/Concept/code/iterators/AlphabeticalOrderIterator";

/** Concrete Collection */
class WordsCollection implements Aggregator {
    private items: string[] = [];

    public getItems(): string[] {
        return this.items;
    }

    public getCount(): number {
        return this.items.length;
    }

    public addItem(item: string): void {
        this.items.push(item);
    }

    public getIterator(): Iterator<string> {
        return new AlphabeticalOrderIterator(this);
    }

    public getReverseIterator(): Iterator<string> {
        return new AlphabeticalOrderIterator(this, true);
    }
}

export { WordsCollection };