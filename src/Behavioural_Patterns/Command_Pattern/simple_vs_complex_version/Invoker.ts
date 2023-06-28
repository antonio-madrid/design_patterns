import {Command} from "./Command";

export class Invoker {
    // @ts-ignore
    private firstCommand: Command;
    // @ts-ignore
    private secondCommand: Command;

    public setFirstCommand(command: Command): void {
        this.firstCommand = command;
    }

    public setSecondCommand(command: Command): void {
        this.secondCommand = command;
    }

    public execute(): void {
        console.log("Invoker: Performing a bunch of actions...");
        console.log("Invoker: Performing a simple command:");
        if (this.isCommand(this.firstCommand)) {
            this.firstCommand.execute();
        }
        console.log("Invoker: Performing a complex command:");
        if (this.isCommand(this.secondCommand)) {
            this.secondCommand.execute();
        }
    }

    private isCommand(object: any): object is Command {
        return object.execute !== undefined;
    }
}