import {Collection} from "src/Basic_Patterns/Behavioural_Patterns/Iterator/Music_Library/code/collections/Collection";
import {Album} from "src/Basic_Patterns/Behavioural_Patterns/Iterator/Music_Library/code/Album";
import {
    AlbumIterator
} from "src/Basic_Patterns/Behavioural_Patterns/Iterator/Music_Library/code/iterators/AlbumIterator";
import {Iterator} from "src/Basic_Patterns/Behavioural_Patterns/Iterator/Music_Library/code/iterators/Iterator";

/** Concrete Collection */
class AlbumCollection implements Collection<Album> {
    private albums: Album[] = [];

    public addAlbum(album: Album): void {
        this.albums.push(album);
    }

    public getAlbums(): Album[] {
        return this.albums;
    }

    public createIterator(): Iterator<Album> {
        return new AlbumIterator(this);
    }
}

export { AlbumCollection };

