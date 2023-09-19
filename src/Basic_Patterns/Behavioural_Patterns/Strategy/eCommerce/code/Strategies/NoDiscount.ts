import {
    DiscountStrategy
} from "src/Basic_Patterns/Behavioural_Patterns/Strategy/eCommerce/code/Strategies/DiscountStrategy";

/** Concrete Strategy */
class NoDiscount implements DiscountStrategy {
    public applyDiscount(amount: number): number {
        return amount;
    }
}

export { NoDiscount};