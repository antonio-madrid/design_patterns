import {CharacterState} from "src/Basic_Patterns/Behavioural_Patterns/State/Platform_game/code/state/CharacterState";
import {Character} from "src/Basic_Patterns/Behavioural_Patterns/State/Platform_game/code/Character";
import {FallingState} from "src/Basic_Patterns/Behavioural_Patterns/State/Platform_game/code/state/FallingState";

class JumpingState implements CharacterState {
    constructor(private character: Character) {}

    handleInput(input: Input) {
        // handle special input for jumping
    }

    update() {
        // Logic for jumping
        if (this.character.velocity.y >= 0) {
            this.character.setState(new FallingState(this.character));
        }
    }
}

export { JumpingState };