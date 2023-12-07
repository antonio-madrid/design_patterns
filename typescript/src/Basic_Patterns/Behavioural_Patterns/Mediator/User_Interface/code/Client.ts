import {
    APIRequestMediator
} from "src/Basic_Patterns/Behavioural_Patterns/Mediator/User_Interface/code/mediators/APIRequestMediator";
import {UserService} from "src/Basic_Patterns/Behavioural_Patterns/Mediator/User_Interface/code/components/UserService";

const mediator = new APIRequestMediator();
const userService = new UserService(mediator);

userService.createUser({ name: 'John Doe', age: 30 });
userService.deleteUser('user123');