import {Builder} from "src/Basic_Patterns/Creational_Patterns/Builder/Concept/code/builders/Builder";

class Director2 {
    private builder!: Builder;

    public constructor(builder: Builder) {
        this.builder = builder;
    }

    public buildMinimalViableProduct(): void {
        this.builder.producePartA();
    }

    public buildFullFeaturedProduct(): void {
        this.builder.producePartA();
        this.builder.producePartB();
        this.builder.producePartC();
    }
}

export { Director2 };