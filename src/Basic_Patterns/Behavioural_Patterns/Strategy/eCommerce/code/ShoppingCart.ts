import {
    DiscountStrategy
} from "src/Basic_Patterns/Behavioural_Patterns/Strategy/eCommerce/code/Strategies/DiscountStrategy";

/** Context class */
class ShoppingCart {
    private discountStrategy: DiscountStrategy;

    constructor(discountStrategy: DiscountStrategy) {
        this.discountStrategy = discountStrategy;
    }

    public setDiscountStrategy(discountStrategy: DiscountStrategy) {
        this.discountStrategy = discountStrategy;
    }

    public calculateTotalPrice(initialAmount: number): number {
        return this.discountStrategy.applyDiscount(initialAmount);
    }
}

export {ShoppingCart};