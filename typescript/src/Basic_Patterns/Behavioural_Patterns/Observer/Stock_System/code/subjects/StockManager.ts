import {
    StockObserver
} from "src/Basic_Patterns/Behavioural_Patterns/Observer/Stock_System/code/observers/StockObserver";

/** Subject */
class StockManager {
    private observers: StockObserver[] = [];
    private stock: Record<string, number> = {};

    public addProduct(productName: string, qty: number) {
        this.stock[productName] = (this.stock[productName] || 0) + qty;
        this.notifyObservers(productName, this.stock[productName]);
    }

    public subscribe(observer: StockObserver) {
        this.observers.push(observer);
    }

    public unsubscribe(observer: StockObserver) {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }

    public notifyObservers(productName: string, qty: number) {
        for (const observer of this.observers) {
            observer.notify(productName, qty);
        }
    }
}

export { StockManager };