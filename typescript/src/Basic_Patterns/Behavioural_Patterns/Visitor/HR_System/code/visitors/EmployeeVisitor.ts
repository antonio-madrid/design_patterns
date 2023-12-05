import {Manager} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/HR_System/code/elements/Manager";
import {Developer} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/HR_System/code/elements/Developer";

/** Visitor Interface */
interface EmployeeVisitor {
    visitManager(manager: Manager): void;
    visitDeveloper(developer: Developer): void;
}

export { EmployeeVisitor };