import {ComplexGraph} from "./ComplexGraph";
import {GraphManager} from "./GraphManager";

const graph = new ComplexGraph();
const graphManager = new GraphManager();

graph.addLayer({ type: 'line', data: [1, 2, 3]});
graph.setConfiguration({ color: 'blue'});
graphManager.saveState(graph.createSnapshot());
console.log(`Check the current status: ${graph.toString()}`);

graph.addLayer({ type: 'bar', data: [4, 5, 6]});
graph.setConfiguration({ color: 'red'});
console.log(`Check the current status: ${graph.toString()}`);

graphManager.restore();
console.log(`Check the current status: ${graph.toString()}`);
