import {ComplexGraph} from "src/Basic_Patterns/Behavioural_Patterns/Memento/Complex_graph_objects/code/ComplexGraph";
import {GraphManager} from "src/Basic_Patterns/Behavioural_Patterns/Memento/Complex_graph_objects/code/GraphManager";

const graph = new ComplexGraph();
const graphManager = new GraphManager();

graph.addLayer({type: 'line', data: [1, 2, 3]});
graph.setConfiguration({color: 'blue'});
graphManager.saveState(graph.createSnapshot());
console.log(`Check the current status: ${graph.toString()}`);

graph.addLayer({type: 'bar', data: [4, 5, 6]});
graph.setConfiguration({color: 'red'});
console.log(`Check the current status: ${graph.toString()}`);

graphManager.restore();
console.log(`Check the current status: ${graph.toString()}`);
