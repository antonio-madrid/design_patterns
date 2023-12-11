import {Iterator} from "src/Basic_Patterns/Behavioural_Patterns/Iterator/Array_Iterator/code/iterators/Iterator";

/** Concrete Iterator */
class ArrayIterator<T> implements Iterator<T> {
    private index = 0;

    constructor(private collection: T[]) {}

    public next(): T {
        return this.collection[this.index++];
    }

    public hasNext(): boolean {
        return this.index < this.collection.length;
    }

}

export { ArrayIterator };