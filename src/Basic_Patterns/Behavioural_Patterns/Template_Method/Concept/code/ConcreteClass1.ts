import {AbstractClass} from "src/Basic_Patterns/Behavioural_Patterns/Template_Method/Concept/code/AbstractClass";

class ConcreteClass1 extends AbstractClass {
    protected requiredOperation1(): void {
        console.log('ConcreteClass1 says: Implemented Operation1');
    }

    protected requiredOperation2(): void {
        console.log('ConcreteClass1 says: Implemented Operation2');
    }
}

export { ConcreteClass1 };