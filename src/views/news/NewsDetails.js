import React, { useEffect, useState } from "react";

import { path } from "../../Path/media-path";
import moment from "moment";
import "moment/locale/ar";

import { GeneralLoading } from "../ui/LoadingScreens";
import NewsDetailsItem from "../ui/newsDetailsItem";
import { fetchNewsItem } from "../../api";
import { useParams } from "react-router-dom";

const NewsDetails = () => {
  const [newsItem, setNewsItem] = useState({});
  let { id } = useParams();
  console.log(newsItem);
  const getItem = async () => {
    //fetch  data
    const response = await fetchNewsItem(id).catch((err) =>
      console.log("Error", err)
    ); //handle errors
    console.log(response);
    if (response && response.data) {
      setNewsItem(response.data);
    }
  };

  useEffect(() => {
    getItem();
  }, []);
  // useEffect(() => {
  //   props.newsDetail(parseInt(props.params));
  // }, []);
  // console.log(props);
  if (newsItem.result) {
    return (
      <>
        <NewsDetailsItem
          key={newsItem.result.id}
          title={newsItem.result.title_AR}
          date={moment(new Date(newsItem.result.publishDate)).format("LL")}
          publish={newsItem.result.publisherName}
          content={newsItem.result.description_AR}
          imgPath={
            path.news +
            newsItem.result.id +
            "/Cover_AR/" +
            newsItem.result.cover_AR
          }
          album={newsItem.result.attachments}
          mediaID={newsItem.result.mediaID}
          pdf={newsItem.result.fileName_AR}
          pdfSrc={path.news + newsItem.result.id + "/fileName_AR/"}
        />
      </>
    );
  }

  return (
    <div>
      {" "}
      <GeneralLoading />{" "}
    </div>
  );
};

export default NewsDetails;
