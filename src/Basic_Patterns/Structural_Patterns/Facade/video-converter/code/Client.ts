import {VideoConverter} from "./VideoConverter";

const converter = new VideoConverter();
const mp4 = converter.convert('youtubevideo.ogg', 'mp4');
mp4.save();