import {Component} from "src/Basic_Patterns/Structural_Patterns/Composite/Complext_Concept/code/Component";

class Leaf extends Component {
    public operation(): string {
        return 'Leaf';
    }
}

export { Leaf };