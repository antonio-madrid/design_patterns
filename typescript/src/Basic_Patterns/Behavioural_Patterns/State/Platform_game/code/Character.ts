import {RunningState} from "src/Basic_Patterns/Behavioural_Patterns/State/Platform_game/code/state/RunningState";
import {CharacterState} from "src/Basic_Patterns/Behavioural_Patterns/State/Platform_game/code/state/CharacterState";

/** Context class */
class Character {
    private state: CharacterState;
    public velocity: {x: number, y: number} = {x: 0, y: 0};
    private counter = 0;

    constructor() {
        this.state = new RunningState(this); // Initial state
    }

    setState(state: CharacterState) {
        this.state = state;
    }

    handleInput(input: Input) {
        this.state.handleInput(input);
    }

    update() {
        this.state.update();
    }

    // Other methods
    isOnGround() {
        this.counter++;
        return this.counter > 10;

    }

}

export { Character };