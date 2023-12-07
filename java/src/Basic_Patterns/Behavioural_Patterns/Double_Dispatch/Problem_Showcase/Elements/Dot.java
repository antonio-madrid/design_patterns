package Basic_Patterns.Behavioural_Patterns.Double_Dispatch.Problem_Showcase.Elements;

public class Dot extends Shape {
    protected int x, y;

    public Dot(String id, int x, int y) {
        super(id);
        this.x = x;
        this.y = y;
    }

    @Override
    public void draw() {
        System.out.println("Drawing a dot at (" + x + ", " + y + ").");
    }
}
