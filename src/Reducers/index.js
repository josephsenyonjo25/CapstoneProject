import {combineReducers} from 'redux'
import AlbumReducer from './AlbumReducer';
import ArtistReducer from './ArtistReducer';
import SongReducer from './SongReducer';
import CartReducer from './CartReducer';

const rootReducer = combineReducers( {
    artist: ArtistReducer,
    album: AlbumReducer,
    song: SongReducer,
    cart: CartReducer
});
export default rootReducer;
