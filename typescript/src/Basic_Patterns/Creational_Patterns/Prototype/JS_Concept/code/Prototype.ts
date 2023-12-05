import {ComponentWithBackReference} from "src/Basic_Patterns/Creational_Patterns/Prototype/JS_Concept/code/ComponentWithBackReference";

class Prototype {
    public primitive: any;
    public component!: object;
    public circularReference!: ComponentWithBackReference;

    /** We could copy deep references one by one with create()*/
    public clone(): this {
        const clone = Object.create(this);
        clone.component = Object.create(this.component);
        clone.circularReference = {
            ...this.circularReference, prototype: {...this},
        };
        // An alternative to copy deep references is using lodash
        return clone;
    }

}

export {Prototype};