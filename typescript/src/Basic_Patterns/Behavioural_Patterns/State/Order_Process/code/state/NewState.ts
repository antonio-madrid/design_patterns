import {OrderState} from "src/Basic_Patterns/Behavioural_Patterns/State/Order_Process/code/state/OrderState";
import {Order} from "src/Basic_Patterns/Behavioural_Patterns/State/Order_Process/code/Order";
import {ProcessedState} from "src/Basic_Patterns/Behavioural_Patterns/State/Order_Process/code/state/ProcessedState";
import {CancelledState} from "src/Basic_Patterns/Behavioural_Patterns/State/Order_Process/code/state/CancelledState";

/** Concrete State */
class NewState implements OrderState {
    constructor(private order: Order) {}

    next() {
        this.order.setState(new ProcessedState(this.order));
    }

    cancel() {
        this.order.setState(new CancelledState(this.order));
    }

    getStatus(): string {
        return 'New';
    }
}

export { NewState };