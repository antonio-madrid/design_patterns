import {Dot} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/Geometric_Shapes/code/elements/Dot";
import {Circle} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/Geometric_Shapes/code/elements/Circle";
import {Rectangle} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/Geometric_Shapes/code/elements/Rectangle";
import {
    CompoundShape
} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/Geometric_Shapes/code/elements/CompoundShape";

interface Visitor {
    visitDot(dot: Dot): void;
    visitCircle(circle: Circle): void;
    visitRectangle(rectangle: Rectangle): void;
    visitCompoundShape(compoundShape: CompoundShape): void;
}

export { Visitor };