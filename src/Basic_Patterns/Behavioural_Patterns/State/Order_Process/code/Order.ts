import {OrderState} from "src/Basic_Patterns/Behavioural_Patterns/State/Order_Process/code/state/OrderState";
import {NewState} from "src/Basic_Patterns/Behavioural_Patterns/State/Order_Process/code/state/NewState";

/** Context class */
class Order {
    private state: OrderState;

    constructor() {
        this.state = new NewState(this); // Initial state
    }

    setState(state: OrderState) {
        this.state = state;
    }

    next() {
        this.state.next();
    }

    cancel() {
        this.state.cancel();
    }

    getStatus(): string {
        return this.state.getStatus();
    }
}

export { Order };