import {Receiver} from "./Receiver";

export abstract class Command {
    protected receiver: Receiver;
    // Este atributo guardará el estado anterior del objeto reciever
    private backup: any;

    protected constructor(receiver: Receiver) {
        this.receiver = receiver;
    }

    // Este método guarda el estado actual del objeto reciever antes de ejecutar el siguiente comando
    public createBackup() {
        this.backup = this.receiver.getState();
    }

    // Permitirá recuperar el estado anterior de la aplicación
    public undo(): void {
        this.receiver.setState(this.backup);
    }

    // Las clases concretas de comando deberán devolver un boolean
    // De esta forma podemos identificar si modificamos el estado del programa
    public abstract execute(): boolean;
}
		