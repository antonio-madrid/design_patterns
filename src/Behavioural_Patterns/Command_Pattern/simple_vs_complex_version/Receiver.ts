export class Receiver {
    public doSomething(message1: string): void {
        console.log(`Receiver: It is performing business logic: (${message1}.)`);
    }

    public doSomethingElse(message2: string): void {
        console.log(`Receiver: It is processing a different business logic:  (${message2}.)`);
    }
}