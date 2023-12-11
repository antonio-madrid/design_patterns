import {Iterator} from "src/Basic_Patterns/Behavioural_Patterns/Iterator/Music_Library/code/iterators/Iterator";
import {Album} from "src/Basic_Patterns/Behavioural_Patterns/Iterator/Music_Library/code/Album";
import {
    AlbumCollection
} from "src/Basic_Patterns/Behavioural_Patterns/Iterator/Music_Library/code/collections/AlbumCollection";

/** Concrete Iterator */
class AlbumIterator implements Iterator<Album> {
    private position: number = 0;

    constructor(private collection: AlbumCollection) {}

    public next(): Album | null {
        if (!this.hasNext()) {
            return null;
        }

        return this.collection.getAlbums()[this.position++];
    }

    public hasNext(): boolean {
        return this.position < this.collection.getAlbums().length;
    }
}

export { AlbumIterator };