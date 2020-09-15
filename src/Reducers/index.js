import {combineReducers} from 'redux'
import AlbumReducer from './AlbumReducer';
import ArtistReducer from './ArtistReducer';
import SongReducer from './SongReducer';



const rootReducer = combineReducers( {
    artist: ArtistReducer,
    album: AlbumReducer,
    song: SongReducer

});
export default rootReducer;
