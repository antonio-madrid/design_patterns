import {
    RemoteControl
} from "src/Basic_Patterns/Structural_Patterns/Bridge/Remote_Control/code/abstractions/RemoteControl";

class AdvanceRemoteControl extends RemoteControl {
    mute(): void {
        console.log('Mute')
        this.device.setVolume(0);
    }
}

export { AdvanceRemoteControl };