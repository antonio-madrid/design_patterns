import {
    ConcretePrototype
} from "./Prototypes/ConcretePrototype";
import {
    PrototypeFactory
} from "./PrototypeFactory";

const factory = new PrototypeFactory();

factory.registerPrototype("prototype1", new ConcretePrototype("prototype1"));
factory.registerPrototype("prototype2", new ConcretePrototype("prototype2"));

const clone1 = factory.createClone("prototype1");
const clone2 = factory.createClone("prototype2");

console.log('Objects cloned from the prototype factory');