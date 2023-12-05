import {EmployeeVisitor} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/HR_System/code/visitors/EmployeeVisitor";
import {Manager} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/HR_System/code/elements/Manager";
import {Developer} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/HR_System/code/elements/Developer";

/** Concrete Visitor */
class BonusCalculator implements EmployeeVisitor {
    visitManager(manager: Manager) {
        console.log('Calculating bonus for manager');
    }

    visitDeveloper(developer: Developer) {
        console.log('Calculating bonus for developer')
    }
}

export { BonusCalculator };