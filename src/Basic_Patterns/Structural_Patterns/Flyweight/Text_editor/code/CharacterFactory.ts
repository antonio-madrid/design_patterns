import {CharacterFlyweight} from "src/Basic_Patterns/Structural_Patterns/Flyweight/Text_editor/code/CharacterFlyweight";

class CharacterFactory {
    private characters: { [key: string]: CharacterFlyweight } = {};

    getCharacter(char: string): CharacterFlyweight {
        if (!this.characters[char]) {
            console.log(`Character not found, creating a new Flyweight object with data: ${char}.`)
            this.characters[char] = new CharacterFlyweight(char);
        }
        return this.characters[char];
    }
}

export { CharacterFactory };