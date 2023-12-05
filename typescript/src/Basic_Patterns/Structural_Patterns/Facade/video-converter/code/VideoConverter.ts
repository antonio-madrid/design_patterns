import {File} from "src/Basic_Patterns/Structural_Patterns/Facade/video-converter/code/complex_video_converter/File";
import {VideoFile} from "src/Basic_Patterns/Structural_Patterns/Facade/video-converter/code/complex_video_converter/VideoFile";
import {CodecFactory} from "src/Basic_Patterns/Structural_Patterns/Facade/video-converter/code/complex_video_converter/CodecFactory";
import {MPEG4CompressionCodec} from "src/Basic_Patterns/Structural_Patterns/Facade/video-converter/code/complex_video_converter/MPEG4CompressionCodec";
import {OggCompressionCodec} from "src/Basic_Patterns/Structural_Patterns/Facade/video-converter/code/complex_video_converter/OggCompressionCodec";
import {BitrateReader} from "src/Basic_Patterns/Structural_Patterns/Facade/video-converter/code/complex_video_converter/BitrateReader";
import {AudioMixer} from "src/Basic_Patterns/Structural_Patterns/Facade/video-converter/code/complex_video_converter/AudioMixer";

/** Facade */
class VideoConverter {
    public convert(filename: string, format: string): File {
        const file = new VideoFile(filename);
        const sourceCodec = new CodecFactory().extract(file);
        let destinationCodec;

        if (format === 'mp4') {
            destinationCodec = new MPEG4CompressionCodec();
        } else {
            destinationCodec = new OggCompressionCodec();
        }

        let buffer = BitrateReader.read(filename, sourceCodec);
        buffer = new BitrateReader().convert(buffer, destinationCodec);
        buffer = new AudioMixer().fix(buffer);

        return new File(buffer);
    }
}

export { VideoConverter };