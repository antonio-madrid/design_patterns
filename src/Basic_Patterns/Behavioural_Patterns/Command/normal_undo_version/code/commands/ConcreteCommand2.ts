import {Command} from "src/Basic_Patterns/Behavioural_Patterns/Command/normal_undo_version/code/commands/Command";
import {Receiver} from "src/Basic_Patterns/Behavioural_Patterns/Command/normal_undo_version/code/Receiver";

export class ConcreteCommand2 extends Command {

    constructor(receiver: Receiver) {
        super(receiver);
    }

    // Cuando un comando no cambie el estado de la aplicación, devolveremos false
    public execute(): boolean {
        console.log('Concrete command 2 is requesting information to the receiver.')
        this.receiver.getSomeInformation();
        return false;
    }
}