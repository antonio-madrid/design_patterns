import {Target} from "src/Basic_Patterns/Structural_Patterns/Adapter/adapter_concept/code/Target";
import {Adaptee} from "src/Basic_Patterns/Structural_Patterns/Adapter/adapter_concept/code/Adaptee";

export class Adapter extends Target {
    private adaptee: Adaptee;

    constructor(adaptee: Adaptee) {
        super();
        this.adaptee = adaptee;
    }

    public request(): string {
        const result = this.adaptee.specificRequest().split('').reverse().join('');
        return `Adapter: (TRANSALATED) ${result}`;
    }
}