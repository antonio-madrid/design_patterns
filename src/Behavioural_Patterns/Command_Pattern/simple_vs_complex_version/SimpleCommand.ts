// Some commands can implement the operations on their own
export class SimpleCommand {
    private message: string;

    constructor(message: string) {
        this.message = message;
    }

    public execute(): void {
        console.log(`SimpleCommand: ${this.message}`)
    }
}