import {Flyweight} from "src/Basic_Patterns/Structural_Patterns/Flyweight/Concept/code/Flyweight";

class Context {
    constructor(
        // mutable data
        private uniqueState: string,
        // immutable data
        private flyweight: Flyweight
    ) {}

    public operation(): void {
        this.flyweight.operation(this.uniqueState);
    }
}

export { Context };