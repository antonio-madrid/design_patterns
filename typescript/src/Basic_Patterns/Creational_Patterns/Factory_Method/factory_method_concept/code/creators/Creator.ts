import {Product} from "src/Basic_Patterns/Creational_Patterns/Factory_Method/factory_method_concept/code/products/Product";

abstract class Creator {
    public abstract factoryMethod(): Product;

    public someOperation(): string {
        const product: Product = this.factoryMethod();
        return `Creator: The same creator's code has just worked with ${product.operation()}`;
    }
}

export { Creator };