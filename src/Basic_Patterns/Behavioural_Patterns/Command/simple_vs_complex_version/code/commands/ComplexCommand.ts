import {Receiver} from "src/Basic_Patterns/Behavioural_Patterns/Command/simple_vs_complex_version/code/Receiver";

export class ComplexCommand {
    private receiver: Receiver;
    private message1: string;
    private message2: string;

    // A Complex command could manage several receivers or actions
    constructor(receiver: Receiver, a: string, b: string) {
        this.receiver = receiver;
        this.message1 = a;
        this.message2 = b;
    }

    // Commands can delegate to any methods of a receiver
    public execute(): void {
        console.log('ComplexCommand: A Complex command could perform more than an action.');
        this.receiver.doSomething(this.message1);
        this.receiver.doSomethingElse(this.message2);
    }
}