import {CharacterState} from "src/Basic_Patterns/Behavioural_Patterns/State/Platform_game/code/state/CharacterState";
import {RunningState} from "src/Basic_Patterns/Behavioural_Patterns/State/Platform_game/code/state/RunningState";
import {Character} from "src/Basic_Patterns/Behavioural_Patterns/State/Platform_game/code/Character";

class FallingState implements  CharacterState {
    constructor(private character: Character) {}

    handleInput(input: Input) {
        // handle special input for falling
    }

    update() {
        // Logic for falling
        if (this.character.isOnGround()) {
            this.character.setState(new RunningState(this.character));
        }
    }
}

export { FallingState };