package Basic_Patterns.Behavioural_Patterns.Double_Dispatch.Problem_Showcase.Helper;

import Basic_Patterns.Behavioural_Patterns.Double_Dispatch.Problem_Showcase.Elements.Circle;
import Basic_Patterns.Behavioural_Patterns.Double_Dispatch.Problem_Showcase.Elements.CompoundGraphic;
import Basic_Patterns.Behavioural_Patterns.Double_Dispatch.Problem_Showcase.Elements.Dot;
import Basic_Patterns.Behavioural_Patterns.Double_Dispatch.Problem_Showcase.Elements.Shape;

public class Exporter {
    public void export(Shape shape) {
        System.out.println("Exporter::export(Shape)");
    }

    public void export(Dot dot) {
        System.out.println("Exporter::export(Dot)");
    }

    public void export(Circle circle) {
        System.out.println("Exporter::export(Circle)");
    }

    public void export(CompoundGraphic compoundGraphic) {
        System.out.println("Exporter::export(CompoundGraphic)");
    }
}
