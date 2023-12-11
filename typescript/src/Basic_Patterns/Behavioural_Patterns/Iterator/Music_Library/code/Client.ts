import {
    AlbumCollection
} from "src/Basic_Patterns/Behavioural_Patterns/Iterator/Music_Library/code/collections/AlbumCollection";
import {Album} from "src/Basic_Patterns/Behavioural_Patterns/Iterator/Music_Library/code/Album";

const musicLibrary = new AlbumCollection();
musicLibrary.addAlbum(new Album('Thriller', ['Beat It', 'Billie Jean']));
musicLibrary.addAlbum(new Album('Back in Black', ['Hells Bells', "Rock and Roll Ain't Noise Pollution"]));

const iterator = musicLibrary.createIterator();

while (iterator.hasNext()) {
    const album = iterator.next();
    console.log(`Album: ${album?.title}, Songs: ${album?.songs.join(', ')}`);
}
