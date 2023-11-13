import {Flyweight} from "src/Basic_Patterns/Structural_Patterns/Flyweight/Concept/code/Flyweight";

class Context {
    constructor(
        private uniqueState: string,
        private flyweight: Flyweight
    ) {}

    public operation(): void {
        this.flyweight.operation(this.uniqueState);
    }
}

export { Context };