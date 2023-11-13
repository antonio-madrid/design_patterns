import {CharacterFactory} from "src/Basic_Patterns/Structural_Patterns/Flyweight/Text_editor/code/CharacterFactory";

const factory = new CharacterFactory();

/** Context entities */
const a = factory.getCharacter('a');
console.log(`Flyweight object 'a' contains: ${a.display()}`);

const b = factory.getCharacter('b');
console.log(`Flyweight object 'b' contains: ${b.display()}`);

const a2 = factory.getCharacter('a');
console.log(`Reusing 'a' Flyweight object via 'a2' variable: ${a2.display()}`);

