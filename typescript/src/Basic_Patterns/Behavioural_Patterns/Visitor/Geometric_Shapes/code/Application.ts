import {Shape} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/Geometric_Shapes/code/elements/Shape";
import {
    XMLExportVisitor
} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/Geometric_Shapes/code/visitors/XMLExportVisitor";
import {Rectangle} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/Geometric_Shapes/code/elements/Rectangle";
import {Dot} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/Geometric_Shapes/code/elements/Dot";
import {Circle} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/Geometric_Shapes/code/elements/Circle";
import {
    CompoundShape
} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/Geometric_Shapes/code/elements/CompoundShape";

/** Client code */
class Application {
    constructor(
        private allShapes: Shape[]
    ) {}

    export(): void {
        const exportVisitor = new XMLExportVisitor();

        for (const shape of this.allShapes) {
            shape.accept(exportVisitor);
        }
    }
}

const app = new Application(
    [
        new Rectangle(),
        new Dot(),
        new Circle(),
        new CompoundShape()
    ]
);

app.export();
