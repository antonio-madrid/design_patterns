import {House} from "src/Basic_Patterns/Creational_Patterns/Builder/House_Builder/code/products/House";

class WoodenHouse extends House {

    public show(): void {
        console.log(`Wooden house built with the following parts: ${this.parts.join(", ")}`);
    }

}

export { WoodenHouse };