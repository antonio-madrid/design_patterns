import {
    ArrayCollection
} from "src/Basic_Patterns/Behavioural_Patterns/Iterator/Array_Iterator/code/collections/ArrayCollection";

const collection = new ArrayCollection<number>();
collection.add(1);
collection.add(2);
collection.add(3);

const iterator = collection.createIterator();

while (iterator.hasNext()) {
    console.log(`Current iteration value: ${iterator.next()}`);
}