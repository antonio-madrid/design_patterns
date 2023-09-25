import {House} from "src/Basic_Patterns/Creational_Patterns/Builder/House_Builder/code/products/House";

class DiamonHouse extends House {
    show() {
        console.log(`Diamon house built with the following parts: ${this.parts.join(", ")}`);
    }
}

export { DiamonHouse };