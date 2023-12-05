import {Developer} from "src/Basic_Patterns/Structural_Patterns/Composite/Organizational_Structure/code/Developer";
import {Manager} from "src/Basic_Patterns/Structural_Patterns/Composite/Organizational_Structure/code/Manager";

const dev1 = new Developer('Frontend Developer');
const dev2 = new Developer('Backend Developer');
const manager = new Manager('Development Manager');

manager.addSubordinate(dev1);
manager.addSubordinate(dev2);

console.log(manager.getRole());
console.log(manager.getSubordinates().map(employee => employee.getRole()));