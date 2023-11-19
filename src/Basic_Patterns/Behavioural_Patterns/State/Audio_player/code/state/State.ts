import {AudioPlayer} from "src/Basic_Patterns/Behavioural_Patterns/State/Audio_player/code/AudioPlayer";

abstract class State {
    constructor(protected player: AudioPlayer) {}

    abstract clickLock(): void;
    abstract clickPlay(): void;
    abstract clickNext(): void;
    abstract clickPrevious(): void;
}

export { State };