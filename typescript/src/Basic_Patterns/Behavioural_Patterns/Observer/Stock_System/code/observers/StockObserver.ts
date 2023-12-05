/** Observer Interface */
interface StockObserver {
    notify(productName: string, qty: number): void;
}

export { StockObserver };