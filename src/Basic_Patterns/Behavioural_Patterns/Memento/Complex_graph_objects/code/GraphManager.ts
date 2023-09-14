import { IGraphSnapshot } from "./IGraphSnapshot";

/** Caretaker */
class GraphManager {
    private snapshots: IGraphSnapshot[] = [];

    public saveState(state: IGraphSnapshot): void {
        this.snapshots.push(state);
    }

    public restore(): void {
        this.snapshots.pop()?.restore();
    }
}

export { GraphManager };