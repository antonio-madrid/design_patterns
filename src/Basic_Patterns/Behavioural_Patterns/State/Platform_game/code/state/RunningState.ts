import {CharacterState} from "src/Basic_Patterns/Behavioural_Patterns/State/Platform_game/code/state/CharacterState";
import {Character} from "src/Basic_Patterns/Behavioural_Patterns/State/Platform_game/code/Character";
import {JumpingState} from "src/Basic_Patterns/Behavioural_Patterns/State/Platform_game/code/state/JumpingState";

class RunningState implements CharacterState {
    constructor(private character: Character) {}

    handleInput(input: Input) {
        if (input === Input.JUMP) {
            this.character.setState(new JumpingState(this.character));
        }
    }

    update() {
        // Logic for running
    }
}

export { RunningState };