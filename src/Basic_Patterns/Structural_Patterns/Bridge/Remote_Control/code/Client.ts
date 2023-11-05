import {Tv} from "src/Basic_Patterns/Structural_Patterns/Bridge/Remote_Control/code/implementations/Tv";
import {
    RemoteControl
} from "src/Basic_Patterns/Structural_Patterns/Bridge/Remote_Control/code/abstractions/RemoteControl";
import {Device} from "src/Basic_Patterns/Structural_Patterns/Bridge/Remote_Control/code/implementations/Device";
import {Radio} from "src/Basic_Patterns/Structural_Patterns/Bridge/Remote_Control/code/implementations/Radio";
import {
    AdvanceRemoteControl
} from "src/Basic_Patterns/Structural_Patterns/Bridge/Remote_Control/code/abstractions/AdvanceRemoteControl";

const tv: Device = new Tv();
const remote = new RemoteControl(tv);
remote.togglePower();

const radio: Device = new Radio();
const advanceRemote = new AdvanceRemoteControl(radio);
advanceRemote.togglePower();
advanceRemote.mute();
