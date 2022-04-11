import { Routes, Route } from "react-router-dom";
import Home from "../views/home";
import NewsList from "../views/news/NewsList";
import NewsDetails from "../views/news/NewsDetails";
import PhotoAlbumList from "../views/photoAlbum/PhotoAlbumList";
import PhotoAlbumDetails from "../views/photoAlbum/PhotoAlbumDetails";
import VideoLibraryList from "../views/videoLibrary/VideoLibraryList";
import VideoLibraryDetails from "../views/videoLibrary/VideoLibraryDetails";
import EventsList from "../views/events/EventsList";
import EventDetails from "../views/events/EventDetails";
import CoursesList from "../views/courses/CoursesList";
import CourseDetails from "../views/courses/CourseDetails";
import DocumentLibraryList from "../views/documentLibrary/DocumentLibraryList";
import DocumentLibraryDetails from "../views/documentLibrary/DocumentLibraryDetails";
import StaticContent from "../views/staticContetnt/StaticContent";

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
      <Route path="/media-corner/events/:id" element={<EventDetails />} />
      <Route path="/media-corner/events" element={<EventsList />} />
      <Route
        path="/media-corner/course-training/:id"
        element={<CourseDetails />}
      />
      <Route path="/media-corner/course-training" element={<CoursesList />} />
      <Route
        path="/document-details/:id"
        element={<DocumentLibraryDetails />}
      />
      <Route
        path="/document-library/:docType"
        element={<DocumentLibraryList />}
      />
      <Route
        path="/document-library/:docType/:observatory"
        element={<DocumentLibraryList />}
      />
      {/* static-content */}
      <Route path="/static-content/:id" element={<StaticContent />} />
    </Routes>
  );
};

export default Router;
