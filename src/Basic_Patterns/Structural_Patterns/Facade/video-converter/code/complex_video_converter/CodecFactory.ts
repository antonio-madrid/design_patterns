import {VideoFile} from "./VideoFile";

class CodecFactory {
    public extract(file: VideoFile) {
        return "sourceCodec"
    }
}

export { CodecFactory };