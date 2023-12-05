import {Visitor} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/Geometric_Shapes/code/visitors/Visitor";
import {Dot} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/Geometric_Shapes/code/elements/Dot";
import {Circle} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/Geometric_Shapes/code/elements/Circle";
import {Rectangle} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/Geometric_Shapes/code/elements/Rectangle";
import {
    CompoundShape
} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/Geometric_Shapes/code/elements/CompoundShape";

/** Concrete Visitor */
class XMLExportVisitor implements Visitor {
    visitDot(dot: Dot) {
        console.log(`Exporting Dot with ID and coordinates.`);
    }

    visitCircle(circle: Circle) {
        console.log(`Exporting Circle with ID, center coordinates and radius.`);
    }

    visitRectangle(rectangle: Rectangle) {
        console.log(`Exporting Rectangle with ID, coordinates, width, and height.`);
    }

    visitCompoundShape(compoundShape: CompoundShape) {
        console.log(`Exporting CompoundShape with ID and children's IDs.`);
    }
}

export { XMLExportVisitor };