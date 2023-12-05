import {Employee} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/HR_System/code/elements/Employee";
import {EmployeeVisitor} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/HR_System/code/visitors/EmployeeVisitor";

/** Concrete Element */
class Developer implements Employee {
    accept(visitor: EmployeeVisitor) {
        visitor.visitDeveloper(this);
    }
}

export { Developer };