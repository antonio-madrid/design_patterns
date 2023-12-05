import {
    GetRequestHandler
} from "src/Basic_Patterns/Behavioural_Patterns/Chain_of_Responsibility/HTTP_handler/code/GetRequestHandler";
import {
    PostRequestHandler
} from "src/Basic_Patterns/Behavioural_Patterns/Chain_of_Responsibility/HTTP_handler/code/PostRequestHandler";

const handler1 = new GetRequestHandler();
const handler2 = new PostRequestHandler();

handler1.setNext(handler2);

console.log(handler1.handle('GET'));
console.log(handler1.handle('POST'));
