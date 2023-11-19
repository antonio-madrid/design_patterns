import {OrderState} from "src/Basic_Patterns/Behavioural_Patterns/State/Order_Process/code/state/OrderState";
import {Order} from "src/Basic_Patterns/Behavioural_Patterns/State/Order_Process/code/Order";

class ShippedState implements OrderState {
    constructor(private order: Order) {}

    next() {
        // Shipped is the last state
    }

    cancel() {
        // Shipped orders cannot be cancelled
    }

    getStatus(): string {
        return 'Shipped';
    }

}

export { ShippedState };