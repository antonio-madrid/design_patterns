import {OrderState} from "src/Basic_Patterns/Behavioural_Patterns/State/Order_Process/code/state/OrderState";
import {Order} from "src/Basic_Patterns/Behavioural_Patterns/State/Order_Process/code/Order";

class CancelledState implements OrderState {
    constructor(private order: Order) {}

    next() {
        // Cancelled is the last state
    }

    cancel() {
        // Cancelled orders cannot be cancelled
    }

    getStatus(): string {
        return 'Cancelled';
    }
}

export { CancelledState };