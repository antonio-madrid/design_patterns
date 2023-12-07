import {Mediator} from "src/Basic_Patterns/Behavioural_Patterns/Mediator/User_Interface/code/mediators/Mediator";

/** Component */
class UserService {
    constructor(
        private mediator: Mediator
    ) {}

    createUser(userData: any): void {
        this.mediator.request('/createUser', userData);
    }

    deleteUser(userId: string): void {
        this.mediator.request('/deleteUser', { userId });
    }
}

export { UserService };