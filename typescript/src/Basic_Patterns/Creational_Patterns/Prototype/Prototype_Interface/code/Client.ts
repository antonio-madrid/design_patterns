import {Developer} from "src/Basic_Patterns/Creational_Patterns/Prototype/Prototype_Interface/code/Prototypes/Developer";
import {Cloneable} from "src/Basic_Patterns/Creational_Patterns/Prototype/Prototype_Interface/code/Prototypes/Cloneable";

const devs: Cloneable[] = [];
const dev: Developer = new Developer(
    'Antonio', 34, ['Problem solving', 'Team work'], 'TypeScript');
devs.push(dev);

const anotherDev = dev.clone();
devs.push(anotherDev);

anotherDev.name = "Bob";
anotherDev.skills.push("Leadership");

console.log('Original dev: ', dev);
console.log('Cloned dev: ', anotherDev);

dev.skills.push('QA');
console.log('Original dev after modification: ', dev);
console.log('Cloned Dev remains the same: ', anotherDev);


