import {Cloneable} from "src/Basic_Patterns/Creational_Patterns/Prototype/Registry/code/Prototypes/Cloneable";


/** Prototype Factory as a Factory and a Register */
class PrototypeFactory {
    private prototype: Map<string, Cloneable> = new Map();

    public registerPrototype(tag: string, prototype: Cloneable): void {
        this.prototype.set(tag, prototype);
    }

    public createClone(tag: string): Cloneable | null {
        const prototype = this.prototype.get(tag);
        if (prototype) {
            return prototype.clone();
        }
        return null;
    }
}

export {PrototypeFactory};