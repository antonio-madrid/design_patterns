import {Singleton} from "./Singleton";

const singleton1: Singleton = Singleton.getInstance();
const singleton2: Singleton = Singleton.getInstance();

console.log('Comparing two instances of Singleton....');
console.log(singleton1 === singleton2);

console.log('Calling some business logic on singleton1....');
singleton1.someBusinessLogic();