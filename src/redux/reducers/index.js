import { combineReducers } from "redux";
import loading from "./loading";
import news from "./news";
import photoAlbum from "./photoAlbum";
import videoLibrary from "./videoLibrary";
import events from "./events";
import courses from "./courses";
import documentLibrary from "./documentLibrary";
import previousManagers from "./previousManagers";
import members from "./members";

export default combineReducers({
  news,
  photoAlbum,
  videoLibrary,
  events,
  loading,
  courses,
  documentLibrary,
  previousManagers,
  members,
});
