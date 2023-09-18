import {PrototypeRegistry} from "./PrototypeRegistry";
import {Person} from "./Prototypes/Person";

const registry: PrototypeRegistry = new PrototypeRegistry();

const antonio: Person = new Person("Antonio", "Developer");

registry.registerPrototype("antonio", antonio);

const dani: Person = registry.createClone('antonio') as Person;
dani.name = "Dani";

console.log('Original person: ', antonio);
console.log('Cloned person: ', dani);
