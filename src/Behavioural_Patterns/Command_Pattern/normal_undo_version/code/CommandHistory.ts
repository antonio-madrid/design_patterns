import {Command} from "./Command";

export class CommandHistory {
    // Lista donde se almacenan los comandos
    private history: Array<Command>;

    public constructor() {
        this.history = [];
    }

    public push(command: Command): void {
        this.history.push(command);
    }

    public pop(): Command | undefined {
        return this.history.pop();
    }
}