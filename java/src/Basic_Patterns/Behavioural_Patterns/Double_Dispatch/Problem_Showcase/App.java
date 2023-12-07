package Basic_Patterns.Behavioural_Patterns.Double_Dispatch.Problem_Showcase;

import Basic_Patterns.Behavioural_Patterns.Double_Dispatch.Problem_Showcase.Elements.Circle;
import Basic_Patterns.Behavioural_Patterns.Double_Dispatch.Problem_Showcase.Elements.Shape;
import Basic_Patterns.Behavioural_Patterns.Double_Dispatch.Problem_Showcase.Helper.Exporter;

public class App {
    public void export(Shape shape) {
        Exporter exporter = new Exporter();
        exporter.export(shape);
    }

    public void drawShape(Shape shape) {
        shape.draw();
    }

    public static void main(String[] args) {
        Circle circle = new Circle("Circle-001", 10, 10, 20);

        App app = new App();
        // Early binding
        app.export(circle);

        // Late binding
        app.drawShape(circle);
    }
}
