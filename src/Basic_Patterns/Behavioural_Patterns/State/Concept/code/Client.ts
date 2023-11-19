import {Context} from "src/Basic_Patterns/Behavioural_Patterns/State/Concept/code/Context";
import {ConcreteStateA} from "src/Basic_Patterns/Behavioural_Patterns/State/Concept/code/state/ConcreteStateA";

const context = new Context(new ConcreteStateA());
context.request1();
context.request2();
