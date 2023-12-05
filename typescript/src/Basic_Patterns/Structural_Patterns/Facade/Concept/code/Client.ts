import {Subsystem2} from "src/Basic_Patterns/Structural_Patterns/Facade/Concept/code/subsystems/Subsystem2";
import {Subsystem1} from "src/Basic_Patterns/Structural_Patterns/Facade/Concept/code/subsystems/Subsystem1";
import {Facade} from "src/Basic_Patterns/Structural_Patterns/Facade/Concept/code/Facade";

const subsystem1 = new Subsystem1();
const subsystem2 = new Subsystem2();
const facade = new Facade(subsystem1, subsystem2);

console.log(facade.operation());
