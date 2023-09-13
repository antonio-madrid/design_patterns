import {Command} from "./Command";
import {Receiver} from "../Receiver";

export class ConcreteCommand extends Command {

    public constructor(receiver: Receiver) {
        super(receiver);
    }

    // Cuando un comando cambie el estado de la aplicación
    public execute(): boolean {
        // Creamos un backup con el estado de la app antes de realizar la acción
        console.log('Concrete command is saving the receiver current state.')
        super.createBackup();
        console.log('Concrete command executing some logic.')
        console.log('Concrete command sending the request to the receiver object.')
        this.receiver.doSomething();
        // Y devolvemos true, para indicar que hubo un cambio de estado
        return true;
    }
}
