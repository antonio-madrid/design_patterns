import {
    StockObserver
} from "src/Basic_Patterns/Behavioural_Patterns/Observer/Stock_System/code/observers/StockObserver";

/** Concrete Observer */
class StockDisplay implements StockObserver {
    public notify(productName: string, qty: number) {
        console.log(`Display: The stock of ${productName} is now ${qty}.`);
    }
}

export { StockDisplay };
