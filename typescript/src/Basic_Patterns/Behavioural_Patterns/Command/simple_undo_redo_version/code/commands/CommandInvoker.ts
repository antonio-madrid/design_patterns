import {Command} from "src/Basic_Patterns/Behavioural_Patterns/Command/simple_undo_redo_version/code/commands/Command"

export class CommandInvoker {
    private undoStack: Command[] = [];
    private redoStack: Command[] = [];

    public execute(command: Command): void {
        command.execute();
        this.undoStack.push(command);
        // Cuando se ejecuta un nuevo comando, se borra la pila de redo
        this.redoStack = [];
    }

    public undo(): void {
        if (this.undoStack.length > 0) {
            const command: Command = this.undoStack.pop()!;
            command.unExecute();
            this.redoStack.push(command); // Guardamos el comando para un posible redo
        }
    }

    public redo(): void {
        if (this.redoStack.length > 0) {
            const command = this.redoStack.pop()!;
            command.execute();
            this.undoStack.push(command); // Guardamos el comando que acabamos de ejecutar para un posible undo
        }
    }
}