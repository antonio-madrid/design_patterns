import {Invoker} from "./Invoker";
import {SimpleCommand} from "./commands/SimpleCommand";
import {Receiver} from "./Receiver";
import {ComplexCommand} from "./commands/ComplexCommand";

// Creating the invoker
const invoker = new Invoker();

// Setting up the simple command
invoker.setFirstCommand(new SimpleCommand('Greetings!'));

// Setting up a business logic object
const receiver: Receiver = new Receiver();

// Setting up the complex command
invoker.setSecondCommand(new ComplexCommand(receiver, 'This is a complex command first message', 'This is a complex command second message'));

// Executing
invoker.execute();