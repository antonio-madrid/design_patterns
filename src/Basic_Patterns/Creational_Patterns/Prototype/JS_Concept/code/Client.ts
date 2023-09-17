import {Prototype} from "./Prototype";
import {
    ComponentWithBackReference
} from "./ComponentWithBackReference";

const prototype1 = new Prototype();
prototype1.primitive = 245;
prototype1.component = new Date();
prototype1.circularReference = new ComponentWithBackReference(prototype1);

const prototype2 = prototype1.clone();

if (prototype1.primitive === prototype2.primitive) {
    console.log(
        "Primitive field values have been carried over to a clone. Yay!"
    );
} else {
    console.log("Primitive field values have not been copied. Booo!");
}

if (prototype1.component === prototype2.component) {
    console.log("Simple component has not been cloned. Booo!");
} else {
    console.log("Simple component has been cloned. Yay!");
}

if (prototype1.circularReference === prototype2.circularReference) {
    console.log("Component with back reference has not been cloned. Booo!");
} else {
    console.log("Component with back reference has been cloned. Yay!");
}

if (prototype1.circularReference.prototype === prototype2.circularReference.prototype) {
    console.log(
        "Component with back reference is linked to original object. Booo!"
    );
} else {
    console.log("Component with back reference is linked to the clone. Yay!");
}