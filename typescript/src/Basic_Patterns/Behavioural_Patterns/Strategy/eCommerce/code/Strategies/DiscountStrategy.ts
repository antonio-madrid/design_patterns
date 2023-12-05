/** Strategy Interface */
interface DiscountStrategy {
    applyDiscount(amount: number): number;
}

export {DiscountStrategy};