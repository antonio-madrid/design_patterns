import {Target} from "src/Basic_Patterns/Structural_Patterns/Adapter/adapter_concept/code/Target";
import {Adaptee} from "src/Basic_Patterns/Structural_Patterns/Adapter/adapter_concept/code/Adaptee";
import {Adapter} from "src/Basic_Patterns/Structural_Patterns/Adapter/adapter_concept/code/Adapter";

console.log('Client: I can work just fine with Target objects:');
const target = new Target();
console.log(target.request());

const adaptee = new Adaptee();
console.log('Client: The Adaptee class has a weird interface incompatible with our code:')
console.log(`Adaptee: ${adaptee.specificRequest()}`);

console.log('Client: But I can understand the Adapted class:');
const adapter = new Adapter(adaptee);
console.log(adapter.request());