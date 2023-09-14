import {IGraphSnapshot} from "./IGraphSnapshot";

type layer = { type: string, data: [] };
type configuration = { color: string }

/** Originator */
class ComplexGraph {
    private layers: layer[];
    private configurations: configuration = { color: 'default'};

    public constructor() {
        this.layers = [];
    }


    public addLayer(layer: any): void {
        this.layers.push(layer);
    }

    public setConfiguration(configs: any): void {
        this.configurations = configs;
    }

    public createSnapshot(): IGraphSnapshot {
        /** Memento class implementation */
        return new class GraphSnapshot implements IGraphSnapshot {
            constructor(
                private originator: ComplexGraph,
                private state: { layers: any, configurations: any }) {}

            public restore(): void {
                this.originator.restore(
                    this.state
                );
            }
        }(this, {
            layers: [...this.layers],
            configurations: { ...this.configurations }
        })
    }

    private restore(state: { layers: any, configurations: any }): void {
        this.layers = state.layers;
        this.configurations = state.configurations;
    }

    public toString(): string {
        let data = `\t`;
        for(let layer of this.layers) {
           data += `${layer.type}: ${layer.data}, `;
        }
        data += `${this.configurations.color}`;
        return data;
    }
}

export { ComplexGraph };