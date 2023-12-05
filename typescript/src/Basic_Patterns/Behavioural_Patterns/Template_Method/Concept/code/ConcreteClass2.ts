import {AbstractClass} from "src/Basic_Patterns/Behavioural_Patterns/Template_Method/Concept/code/AbstractClass";

class ConcreteClass2 extends AbstractClass {
    protected requiredOperation1(): void {
        console.log('ConcreteClass2 says: Implemented Operation1');
    }

    protected requiredOperation2(): void {
        console.log('ConcreteClass2 says: Implemented Operation2');
    }

    protected hook1(): void {
        console.log('ConcreteClass2 says: Overridden Hook1');
    }
}

export { ConcreteClass2 };