import {Subject} from "src/Basic_Patterns/Structural_Patterns/Proxy/proxy_concept/code/interfaces/Subject";
import {RealSubject} from "src/Basic_Patterns/Structural_Patterns/Proxy/proxy_concept/code/services/RealSubject";
import {Proxy} from "src/Basic_Patterns/Structural_Patterns/Proxy/proxy_concept/code/proxies/Proxy";

function clientCode(subject: Subject): void {
    subject.request();
}

console.log('Client: Executing the client code with a real subject:');
const realSubject: Subject = new RealSubject();
clientCode(realSubject);

console.log('Client: Executing the same client code with a Proxy:');
const proxy: Subject = new Proxy(realSubject);
clientCode(proxy);