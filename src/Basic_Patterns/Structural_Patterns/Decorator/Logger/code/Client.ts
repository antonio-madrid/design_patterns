import {StandardProcess} from "src/Basic_Patterns/Structural_Patterns/Decorator/Logger/code/StandardProcess";
import {LoggingDecorator} from "src/Basic_Patterns/Structural_Patterns/Decorator/Logger/code/LoggingDecorator";

const process = new StandardProcess();
const loggedProcess = new LoggingDecorator(process);

loggedProcess.execute();