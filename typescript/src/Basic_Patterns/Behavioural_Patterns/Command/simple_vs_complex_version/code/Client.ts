import {Invoker} from "src/Basic_Patterns/Behavioural_Patterns/Command/simple_vs_complex_version/code/Invoker";
import {
    SimpleCommand
} from "src/Basic_Patterns/Behavioural_Patterns/Command/simple_vs_complex_version/code/commands/SimpleCommand";
import {Receiver} from "src/Basic_Patterns/Behavioural_Patterns/Command/simple_vs_complex_version/code/Receiver";
import {
    ComplexCommand
} from "src/Basic_Patterns/Behavioural_Patterns/Command/simple_vs_complex_version/code/commands/ComplexCommand";

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