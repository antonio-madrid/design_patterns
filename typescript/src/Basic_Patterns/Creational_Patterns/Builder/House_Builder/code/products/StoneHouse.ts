import {House} from "src/Basic_Patterns/Creational_Patterns/Builder/House_Builder/code/products/House";

class StoneHouse extends House {

        public show(): void {
            console.log(`Stone house built with the following parts: ${this.parts.join(", ")}`);
        }

}

export { StoneHouse };