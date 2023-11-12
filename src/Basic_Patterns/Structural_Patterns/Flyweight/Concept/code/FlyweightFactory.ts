import {Flyweight} from "src/Basic_Patterns/Structural_Patterns/Flyweight/Concept/code/Flyweight";

class FlyweightFactory {
    private flyweights: {[key: string]: Flyweight } = <any>{};

    constructor(initialFlyweights: string[][]) {
        for (const state of initialFlyweights) {
            this.flyweights[this.getKey(state)] = new Flyweight(state);
        }
    }

    private getKey(state: string[]): string {
        return state.join('_');
    }

    public getFlyweight(sharedState: string[]): Flyweight {
        const key = this.getKey(sharedState);

        if (!(key in this.flyweights)) {
            console.log(`FlyweightFactory: Can\'t find a flyweight, creating new one.`);
            this.flyweights[key] = new Flyweight(sharedState);
        } else {
            console.log(`FlyweightFactory: Reusing existing flyweight.`);
        }

        return this.flyweights[key];
    }

    public listFlyweights(): void {
        const count = Object.keys(this.flyweights).length;
        console.log(`\nFlyweightFactory: I have ${count} flyweights.`);
        for (const key in this.flyweights) {
            console.log(key);
        }
    }
}

export { FlyweightFactory };