abstract class Component {
    protected parent!: Component | null;

    public setParent(parent: Component | null) {
        this.parent = parent;
    }

    public getParent(): Component | null {
        return this.parent;
    }

    public add(component: Component): void {}

    public remove(component: Component): void {}

    public isComposite(): boolean {
        return false;
    }

    public abstract operation(): string;
}

export { Component };

