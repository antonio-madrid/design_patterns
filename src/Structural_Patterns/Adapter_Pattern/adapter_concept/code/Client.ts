import {Target} from "./Target";
import {Adaptee} from "./Adaptee";
import {Adapter} from "./Adapter";

console.log('Client: I can work just fine with Target objects:');
const target = new Target();
console.log(target.request());

const adaptee = new Adaptee();
console.log('Client: The Adaptee class has a weird interface incompatible with our code:')
console.log(`Adaptee: ${adaptee.specificRequest()}`);

console.log('Client: But I can understand the Adapted class:');
const adapter = new Adapter(adaptee);
console.log(adapter.request());