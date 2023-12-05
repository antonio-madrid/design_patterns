import {Buffer} from "src/Basic_Patterns/Structural_Patterns/Facade/video-converter/code/complex_video_converter/Buffer";

class File {
    constructor(public buffer: Buffer) {
    }

    public save() {}
}

export { File };