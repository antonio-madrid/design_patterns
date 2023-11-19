import {State} from "src/Basic_Patterns/Behavioural_Patterns/State/Audio_player/code/state/State";
import {PlayingState} from "src/Basic_Patterns/Behavioural_Patterns/State/Audio_player/code/state/PlayingState";
import {ReadyState} from "src/Basic_Patterns/Behavioural_Patterns/State/Audio_player/code/state/ReadyState";

class LockedState extends State {
    clickLock() {
        if (this.player.playing) {
            this.player.changeState(new PlayingState(this.player));
        } else {
            this.player.changeState(new ReadyState(this.player));
        }
    }

    clickPlay() {
    }

    clickNext() {
    }

    clickPrevious() {
    }
}

export { LockedState };