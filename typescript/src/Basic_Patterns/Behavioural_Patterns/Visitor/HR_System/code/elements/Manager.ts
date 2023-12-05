import {Employee} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/HR_System/code/elements/Employee";
import {EmployeeVisitor} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/HR_System/code/visitors/EmployeeVisitor";

/** Concrete Element */
class Manager implements Employee {
    accept(visitor: EmployeeVisitor) {
        visitor.visitManager(this);
    }
}

export { Manager };