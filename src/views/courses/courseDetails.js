import React, { useEffect, useState } from "react";

import { path } from "../../Path/media-path";
import moment from "moment";
import "moment/locale/ar";

import { GeneralLoading } from "../ui/LoadingScreens";
import NewsDetailsItem from "../ui/newsDetailsItem";
import { fetchCourseItem } from "../../api";
import { useParams } from "react-router-dom";

const CourseDetails = () => {
  const [courseItem, setCourseItem] = useState({});
  let { id } = useParams();
  const getItem = async () => {
    //fetch  data
    const response = await fetchCourseItem(id).catch((err) =>
      console.log("Error", err)
    ); //handle errors
    console.log(response);
    if (response && response.data) {
      setCourseItem(response.data);
    }
  };

  useEffect(() => {
    getItem();
  }, []);

  if (courseItem.result) {
    return (
      <>
        <NewsDetailsItem
          key={courseItem.result.id}
          title={courseItem.result.courseName}
          place={courseItem.result.place ?? null}
          price={courseItem.result.price ?? null}
          date={moment(new Date(courseItem.result.publishDate)).format("LL")}
          content={courseItem.result.trainingSubject}
          imgPath={
            courseItem.result.photo_AR
              ? path.courses +
                courseItem.result.id +
                "/Photo_AR/" +
                courseItem.result.photo_AR
              : null
          }
          album={courseItem.result.attachments}
          mediaID={courseItem.result.mediaID}
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

export default CourseDetails;
