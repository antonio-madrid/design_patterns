import {Order} from "src/Basic_Patterns/Behavioural_Patterns/State/Order_Process/code/Order";

const order = new Order();

console.log(order.getStatus()); // New
order.next();
console.log(order.getStatus()); // Processed
order.next();
console.log(order.getStatus()); // Shipped

order.cancel();
console.log(order.getStatus()); // Shipped