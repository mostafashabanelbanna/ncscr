import { combineReducers } from "redux";
import news from "./news";
import photoAlbum from "./photoAlbum";
import videoLibrary from "./videoLibrary";

export default combineReducers({
  news,
  photoAlbum,
  videoLibrary,
});
