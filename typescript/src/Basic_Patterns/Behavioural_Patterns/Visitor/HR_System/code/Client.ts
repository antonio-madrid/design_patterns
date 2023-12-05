import {Manager} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/HR_System/code/elements/Manager";
import {Developer} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/HR_System/code/elements/Developer";
import {BonusCalculator} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/HR_System/code/visitors/BonusCalculator";
import {Employee} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/HR_System/code/elements/Employee";

const employees: Employee[] = [
    new Manager(),
    new Developer()
];

const bonusCalculator = new BonusCalculator();

employees.forEach(employee => employee.accept(bonusCalculator));