import {EmployeeVisitor} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/HR_System/code/visitors/EmployeeVisitor";

/** Element Interface */
interface Employee {
    accept(visitor: EmployeeVisitor): void;
}

export { Employee };