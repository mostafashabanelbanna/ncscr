import { Routes, Route } from "react-router-dom";
import Home from "../views/home";
import NewsList from "../views/news/NewsList";
import NewsDetails from "../views/news/NewsDetails";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/media-corner/news" element={<NewsList />} />
      <Route path="/media-corner/news/:id" element={<NewsDetails />} />
    </Routes>
  );
};

export default Router;
