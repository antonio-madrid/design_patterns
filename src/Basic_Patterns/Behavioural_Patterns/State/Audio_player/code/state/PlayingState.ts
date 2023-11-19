import {State} from "src/Basic_Patterns/Behavioural_Patterns/State/Audio_player/code/state/State";
import {LockedState} from "src/Basic_Patterns/Behavioural_Patterns/State/Audio_player/code/state/LockedState";
import {ReadyState} from "src/Basic_Patterns/Behavioural_Patterns/State/Audio_player/code/state/ReadyState";

/** Concrete State */
class PlayingState extends State {
    clickLock() {
        this.player.changeState(new LockedState(this.player));
    }

    clickPlay() {
        this.player.stopPlayback();
        this.player.changeState(new ReadyState(this.player));
    }

    clickNext() {
    }

    clickPrevious() {
    }
}

export { PlayingState };