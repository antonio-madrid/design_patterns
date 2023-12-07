import {Mediator} from "src/Basic_Patterns/Behavioural_Patterns/Mediator/User_Interface/code/mediators/Mediator";

/** Concrete Mediator */
class APIRequestMediator implements Mediator {
    request(endpoint: string, data?: any) {
        console.log(`Requesting ${endpoint} with data ${data}`);
    }
}

export { APIRequestMediator };