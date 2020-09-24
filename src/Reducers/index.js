import { combineReducers } from "redux";
import AlbumReducer from "./AlbumReducer";
import ArtistReducer from "./ArtistReducer";
import SongReducer from "./SongReducer";
import CartReducer from "./CartReducer";
import AuthReducer from "./AuthReducer";

const rootReducer = combineReducers({
  artist: ArtistReducer,
  album: AlbumReducer,
  song: SongReducer,
  cart: CartReducer,
  auth: AuthReducer,
});
export default rootReducer;
