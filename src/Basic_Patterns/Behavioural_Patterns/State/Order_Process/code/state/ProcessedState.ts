import {OrderState} from "src/Basic_Patterns/Behavioural_Patterns/State/Order_Process/code/state/OrderState";
import {Order} from "src/Basic_Patterns/Behavioural_Patterns/State/Order_Process/code/Order";
import {ShippedState} from "src/Basic_Patterns/Behavioural_Patterns/State/Order_Process/code/state/ShippedState";

/** Concrete State */
class ProcessedState implements OrderState {
    constructor(private order: Order) {}

    next() {
        this.order.setState(new ShippedState(this.order));
    }

    cancel() {
        // Processed orders cannot be cancelled
    }

    getStatus(): string {
        return 'Processed';
    }

}

export { ProcessedState };