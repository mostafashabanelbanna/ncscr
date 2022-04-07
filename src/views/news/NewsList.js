import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNews } from "../../redux/actions/news";

const NewsList = () => {
  const news = useSelector((state) => state.news);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews(pageNumber, keywords, pageSize));
  }, [dispatch]);

  return <div>NewsList</div>;
};

export default NewsList;
