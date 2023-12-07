package Basic_Patterns.Behavioural_Patterns.Double_Dispatch.Problem_Showcase.Elements;

public class Circle extends Dot {
    protected int radius;

    public Circle(String id, int x, int y, int radius) {
        super(id, x, y);
        this.radius = radius;
    }

    @Override
    public void draw() {
        System.out.println("Drawing a circle at (" + x + ", " + y + ") with radius " + radius + ".");
    }
}
