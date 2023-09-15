import {PaymentProcessor} from "../subsystems/PaymentProcessor";

class PaymentFacade {
    private paymentProcessor: PaymentProcessor;

    constructor() {
        this.paymentProcessor = new PaymentProcessor();
    }

    public processBill(amount: number): void {
        this.paymentProcessor.makePayment(amount);
        console.log(`Bill for ${amount} euros successfully processed`);
    }
}

export { PaymentFacade };