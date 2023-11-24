import {
    StockObserver
} from "src/Basic_Patterns/Behavioural_Patterns/Observer/Stock_System/code/observers/StockObserver";

/** Concrete Observer */
class EmailAlertStockObserver implements StockObserver {
    public notify(productName: string, qty: number) {
        console.log(`Alert: The stock of ${productName} has been updated to ${qty}`);
    }
}

export { EmailAlertStockObserver };