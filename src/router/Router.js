import { Routes, Route } from "react-router-dom";
import Home from "../views/home";
import NewsList from "../views/news/NewsList";
import NewsDetails from "../views/news/NewsDetails";
import PhotoAlbumList from "../views/photoAlbum/PhotoAlbumList";
import PhotoAlbumDetails from "../views/photoAlbum/PhotoAlbumDetails";
import VideoLibraryList from "../views/videoLibrary/VideoLibraryList";
import VideoLibraryDetails from "../views/videoLibrary/VideoLibraryDetails";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/media-corner/news/:id" element={<NewsDetails />} />
      <Route path="/media-corner/news" element={<NewsList />} />
      <Route
        path="/media-corner/photo-album/:id"
        element={<PhotoAlbumDetails />}
      />
      <Route path="/media-corner/photo-album" element={<PhotoAlbumList />} />
      <Route
        path="/media-corner/video-library/:id"
        element={<VideoLibraryDetails />}
      />
      <Route
        path="/media-corner/video-library"
        element={<VideoLibraryList />}
      />
    </Routes>
  );
};

export default Router;
