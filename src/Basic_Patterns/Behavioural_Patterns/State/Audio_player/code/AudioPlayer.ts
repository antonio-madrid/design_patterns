import {State} from "src/Basic_Patterns/Behavioural_Patterns/State/Audio_player/code/state/State";
import {ReadyState} from "src/Basic_Patterns/Behavioural_Patterns/State/Audio_player/code/state/ReadyState";
import {UserInterface} from "src/Basic_Patterns/Behavioural_Patterns/State/Audio_player/code/UserInterface";

class AudioPlayer {
    private state: State;
    UI: UserInterface;
    volume: number;
    playlist: string[];
    currentSong: string;
    playing: boolean;

    constructor() {
        this.state = new ReadyState(this);
        this.UI = new UserInterface();
        this.volume = 0;
        this.playlist = [];
        this.currentSong = "";
        this.playing = false;
        this.UI.lockButton.onClick = () => this.clickLock();
        this.UI.playButton.onClick = () => this.clickPlay();
        this.UI.nextButton.onClick = () => this.clickNext();
        this.UI.prevButton.onClick = () => this.clickPrevious();
    }

    changeState(state: State): void {
        this.state = state;
    }

    clickLock(): void {
        this.state.clickLock();
    }

    clickPlay(): void {
        this.state.clickPlay();
    }

    clickNext(): void {
        this.state.clickNext();
    }

    clickPrevious(): void {
        this.state.clickPrevious();
    }

    startPlayback(): void {
        this.playing = true;
        console.log("Start playback");
    }

    stopPlayback(): void {
        this.playing = false;
        console.log("Stop playback");
    }

    nextSong(): void {
        console.log("Next song");
    }

    previousSong(): void {
        console.log("Previous song");
    }

    fastForward(time: number): void {
        console.log("Fast forward");
    }

    rewind(time: number): void {
        console.log("Rewind");
    }

}

export { AudioPlayer };