import {Flyweight} from "src/Basic_Patterns/Structural_Patterns/Flyweight/Concept/code/Flyweight";

class FlyweightFactory {
    private flyweights: Map<string, Flyweight> = new Map();

    constructor(initialFlyweights: string[]) {
        for (const state of initialFlyweights) {
            this.flyweights.set(state, new Flyweight(state))
        }
    }

    public getFlyweight(sharedState: string): Flyweight {
        if (!this.flyweights.has(sharedState)) {
            console.log(`FlyweightFactory: Can\'t find a flyweight, creating new one.`);
            this.flyweights.set(sharedState, new Flyweight(sharedState));
        } else {
            console.log(`FlyweightFactory: Reusing existing flyweight.`);
        }

        return this.flyweights.get(sharedState) as Flyweight;
    }

    public listFlyweights(): void {
        const count = this.flyweights.size;
        console.log(`FlyweightFactory: I have ${count} flyweights`);
        for (const key of this.flyweights.keys()) {
            console.log(key);
        }
    }
}

export { FlyweightFactory };