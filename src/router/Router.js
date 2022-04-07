import { Routes, Route } from "react-router-dom";
import Home from '../views/home'
import NewsList from "../views/news/NewsList";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/news" element={<NewsList />} />
    </Routes>
  );
};

export default Router;