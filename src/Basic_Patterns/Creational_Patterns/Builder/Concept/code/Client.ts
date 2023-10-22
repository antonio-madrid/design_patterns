import {ConcreteBuilder1} from "src/Basic_Patterns/Creational_Patterns/Builder/Concept/code/builders/ConcreteBuilder1";
import {Director} from "src/Basic_Patterns/Creational_Patterns/Builder/Concept/code/Director";
import {Director2} from "src/Basic_Patterns/Creational_Patterns/Builder/Concept/code/Director2";

const builder = new ConcreteBuilder1();
const director = new Director();
director.setBuilder(builder);

console.log('Standard basic product:');
director.buildMinimalViableProduct();
builder.getProduct().listParts();

console.log('Standard full featured product:');
director.buildFullFeaturedProduct();
builder.getProduct().listParts();

// Using builder without director
console.log('Custom product:');
builder.producePartA();
builder.producePartC();
builder.getProduct().listParts();


//--------------------------------------------------------------------------------------------
console.log('Working with a Director which set a Builder within its constructor')
const director2 = new Director2(builder);
director2.buildFullFeaturedProduct();
builder.getProduct().listParts();