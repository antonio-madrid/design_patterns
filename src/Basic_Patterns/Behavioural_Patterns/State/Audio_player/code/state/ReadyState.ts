import {State} from "src/Basic_Patterns/Behavioural_Patterns/State/Audio_player/code/state/State";
import {LockedState} from "src/Basic_Patterns/Behavioural_Patterns/State/Audio_player/code/state/LockedState";
import {PlayingState} from "src/Basic_Patterns/Behavioural_Patterns/State/Audio_player/code/state/PlayingState";

class ReadyState extends State {
    clickLock() {
        this.player.changeState(new LockedState(this.player));
    }

    clickPlay() {
        this.player.startPlayback();
        this.player.changeState(new PlayingState(this.player));
    }

    clickNext() {
        this.player.nextSong();
    }

    clickPrevious() {
        this.player.previousSong();
    }
}

export { ReadyState };