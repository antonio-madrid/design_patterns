import {VideoFile} from "src/Basic_Patterns/Structural_Patterns/Facade/video-converter/code/complex_video_converter/VideoFile";

class CodecFactory {
    public extract(file: VideoFile) {
        return "sourceCodec"
    }
}

export { CodecFactory };