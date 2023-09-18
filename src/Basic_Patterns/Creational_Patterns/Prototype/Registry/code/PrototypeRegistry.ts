import {Cloneable} from "./Prototypes/Cloneable";

/** Responsible to manage clones. */
class PrototypeRegistry {
    private prototypes: Map<string, Cloneable> = new Map();

    public registerPrototype(id: string, prototype: Cloneable): void {
        this.prototypes.set(id, prototype);
    }

    public createClone(id: string): Cloneable | null{
        const prototype = this.prototypes.get(id);
        if (prototype) {
            return prototype.clone();
        }
        return null;
    }
}

export {PrototypeRegistry};