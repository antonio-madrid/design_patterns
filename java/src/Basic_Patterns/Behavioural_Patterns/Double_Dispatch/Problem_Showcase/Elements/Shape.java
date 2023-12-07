package Basic_Patterns.Behavioural_Patterns.Double_Dispatch.Problem_Showcase.Elements;

public class Shape implements Graphic {
    protected String id;

    public Shape(String id) {
        this.id = id;
    }

    @Override
    public void draw() {
        System.out.println("Drawing a shape with id " + id + ".");
    }
}
