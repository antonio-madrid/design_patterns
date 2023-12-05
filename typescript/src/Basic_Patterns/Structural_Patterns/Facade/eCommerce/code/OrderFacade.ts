import {PaymentSystem} from "src/Basic_Patterns/Structural_Patterns/Facade/eCommerce/code/Subsystem/PaymentSystem";
import {InventorySystem} from "src/Basic_Patterns/Structural_Patterns/Facade/eCommerce/code/Subsystem/InventorySystem";
import {ShippingSystem} from "src/Basic_Patterns/Structural_Patterns/Facade/eCommerce/code/Subsystem/ShippingSystem";

class OrderFacade {
    private payment: PaymentSystem;
    private inventory: InventorySystem;
    private shipping: ShippingSystem;

    constructor() {
        this.payment = new PaymentSystem();
        this.inventory = new InventorySystem();
        this.shipping = new ShippingSystem();
    }

    public placeOrder(product: string, amount: number, address: string): void {
        if (!this.inventory.checkAvailability(product)) {
            console.log(`Product ${product} is not available`);
            return;
        }

        this.payment.processPayment(amount);
        this.shipping.generateLabel(address);

        console.log(`Product ${product} successfully shipped to ${address}`);
    }
}

export { OrderFacade };