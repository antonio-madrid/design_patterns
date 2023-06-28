// El objeto Sender podría ser un button por ejemplo
import {CommandHistory} from "./CommandHistory";
import {Command} from "./Command";

export class Invoker_or_Sender {

    private history: CommandHistory;

    constructor() {
        this.history = new CommandHistory();
    }

    // Comprueba si el comando cambia el estado al devolver true o false
    // Si devuelve true, lo almacena en el historial
    public executeCommand(command: Command) {
        // Podríamos añadir lógica addicional exclusiva del Invoker
        if (command.execute()) {
            this.history.push(command);
        }
    }

    // Permite deshacer la última operación
    public undo() {
        // Primero la elimina del historial
        const command = this.history.pop();
        if (command != null) {
            // Y después le dice al comando que se 'deshaga'
            command.undo();
        }
    }

}