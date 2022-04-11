import React, { useEffect, useState } from "react";

import { path } from "../../Path/media-path";
import moment from "moment";
import "moment/locale/ar";

import { GeneralLoading } from "../ui/LoadingScreens";
import NewsDetailsItem from "../ui/newsDetailsItem";
import { fetchEventItem } from "../../api";
import { useParams } from "react-router-dom";

const EventDetails = () => {
  const [eventsItem, setEventsItem] = useState({});
  let { id } = useParams();
  const getItem = async () => {
    //fetch  data
    const response = await fetchEventItem(id).catch((err) =>
      console.log("Error", err)
    ); //handle errors
    console.log(response);
    if (response && response.data) {
      setEventsItem(response.data);
    }
  };

  useEffect(() => {
    getItem();
  }, []);

  if (eventsItem.result) {
    return (
      <>
        <NewsDetailsItem
          key={props.course.result.id}
          title={props.course.result.courseName}
          place={props.course.result.place ?? null}
          price={props.course.result.price ?? null}
          date={moment(new Date(props.course.result.publishDate)).format("LL")}
          content={props.course.result.trainingSubject}
          imgPath={
            props.course.result.photo_AR
              ? path.courses +
                props.course.result.id +
                "/Photo_AR/" +
                props.course.result.photo_AR
              : null
          }
          album={props.course.result.attachments}
          mediaID={props.course.result.mediaID}
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

export default EventDetails;
