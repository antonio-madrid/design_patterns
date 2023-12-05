import {Receiver} from "src/Basic_Patterns/Behavioural_Patterns/Command/normal_undo_version/code/Receiver";
import {ConcreteCommand} from "src/Basic_Patterns/Behavioural_Patterns/Command/normal_undo_version/code/commands/ConcreteCommand";
import {ConcreteCommand2} from "src/Basic_Patterns/Behavioural_Patterns/Command/normal_undo_version/code/commands/ConcreteCommand2";
import {Invoker_or_Sender} from "src/Basic_Patterns/Behavioural_Patterns/Command/normal_undo_version/code/Invoker";

// El código cliente se encarga generalmente de configurar los comandos
console.log('Client setting up commands...')
const receiver = new Receiver();

const saveCommand = new ConcreteCommand(receiver);
const getInfoCommand = new ConcreteCommand2(receiver);

// El código cliente instancia a la clase invocadora y le pasa los comandos a ejecutar
console.log('Client instancing the invoker...')
const invoker = new Invoker_or_Sender();

console.log('Client sending commands...')
invoker.executeCommand(saveCommand);
invoker.executeCommand(getInfoCommand);

console.log('Client requesting the undo operation to the invoker.')
invoker.undo();

console.log('Client requesting a new command after the undo operation')
invoker.executeCommand(getInfoCommand); // Debería dar el estado inicial