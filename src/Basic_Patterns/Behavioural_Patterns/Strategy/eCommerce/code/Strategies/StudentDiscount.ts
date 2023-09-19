import {
    DiscountStrategy
} from "src/Basic_Patterns/Behavioural_Patterns/Strategy/eCommerce/code/Strategies/DiscountStrategy";

/** Concrete Strategy */
class StudentDiscount implements DiscountStrategy {
    public applyDiscount(amount: number): number {
        return amount * 0.9; // 10% discount
    }
}

export {StudentDiscount};