import {VideoConverter} from "src/Basic_Patterns/Structural_Patterns/Facade/video-converter/code/VideoConverter";

const converter = new VideoConverter();
const mp4 = converter.convert('youtubevideo.ogg', 'mp4');
mp4.save();