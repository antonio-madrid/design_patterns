import {Builder} from "src/Basic_Patterns/Creational_Patterns/Builder/Concept/code/builders/Builder";
import {Product1} from "src/Basic_Patterns/Creational_Patterns/Builder/Concept/code/products/Product1";

class ConcreteBuilder1 implements Builder {
    private product!: Product1;

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.product = new Product1();
    }

    public producePartA(): void {
        this.product.parts.push('PartA1');
    }

    public producePartB(): void {
        this.product.parts.push('PartB1');
    }

    public producePartC(): void {
        this.product.parts.push('PartC1');
    }

    public getProduct(): Product1 {
        const result = this.product;
        this.reset();
        return result;
    }
}

export { ConcreteBuilder1 };