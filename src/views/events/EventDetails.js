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
          key={eventsItem.result.id}
          title={eventsItem.result.title_AR}
          type={eventsItem.result.eventCategoryName}
          date={
            moment(new Date(eventsItem.result.endDate)).format("LL") +
            " الى " +
            moment(new Date(eventsItem.result.startDate)).format("LL")
          }
          content={eventsItem.result.description_AR}
          imgPath={
            path.events +
            eventsItem.result.id +
            "/Photo_AR/" +
            eventsItem.result.photo_AR
          }
          album={eventsItem.result.attachments}
          mediaID={eventsItem.result.mediaID}
          pdf={eventsItem.result.fileName_AR}
          pdfSrc={path.event + eventsItem.result.id + "/fileName_AR/"}
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
