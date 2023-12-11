import {Collection} from "src/Basic_Patterns/Behavioural_Patterns/Iterator/Array_Iterator/code/collections/Collection";
import {
    ArrayIterator
} from "src/Basic_Patterns/Behavioural_Patterns/Iterator/Array_Iterator/code/iterators/ArrayIterator";
import {Iterator} from "src/Basic_Patterns/Behavioural_Patterns/Iterator/Array_Iterator/code/iterators/Iterator";

/** Concrete Collection */
class ArrayCollection<T> implements Collection<T> {
    private items: T[] = [];

    public add(item: T): void {
        this.items.push(item);
    }

    public createIterator(): Iterator<T> {
        return new ArrayIterator(this.items);
    }
}

export { ArrayCollection };