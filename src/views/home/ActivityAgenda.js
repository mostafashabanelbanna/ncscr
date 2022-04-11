import React, { useState, useEffect, createRef } from "react";
import { Link, useNavigate, useRoutes } from "react-router-dom";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import moment from "moment";
import "moment/locale/ar";
import Fade from "react-reveal/Fade";

import { fetchHomeEvents } from "../../api/index";
import { AgendaSkeleton } from "../ui/LoadingScreens";

const ActivityAgenda = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();
  const calenderRef = createRef();
  // const month = new Date().getMonth() + 1;
  const eventsArr = [{}];

  const getEvents = async (month = new Date().getMonth() + 1) => {
    const { data } = await fetchHomeEvents(month);

    setEvents(data);
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div className="pt-5 pb-2 bg-light">
      <div className="container">
        <div className="col-12 my-3 px-3">
          <h3>
            <u>أجندة الأحداث</u>{" "}
          </h3>
        </div>
        <div className="d-flex my-2">
          <img src="./images/icons/calender_titel-0١.png" alt="" width="80px" />
          <div>
            {" "}
            {/* <h3 className="mt-4 me-2  text-secondary">{props.title} </h3> */}
          </div>
        </div>
      </div>

      <>
        <div className="d-flex flex-column flex-xl-row container">
          <div className="col-xl-6 col-12 px-xl-3 px-0">
            <FullCalendar
              ref={calenderRef}
              customButtons={{
                next: {
                  click: function () {
                    let calendarApi = calenderRef.current.getApi();
                    calendarApi.next();
                    let currentMonth = calendarApi.getDate().getMonth();
                    getEvents(currentMonth + 1);
                  },
                  icon: "fc-icon fc-icon-chevron-right",
                },
                prev: {
                  click: function () {
                    let calendarApi = calenderRef.current.getApi();
                    calendarApi.prev();
                    let currentMonth = calendarApi.getDate().getMonth();

                    getEvents(currentMonth + 1);
                  },
                  icon: "fc-icon fc-icon-chevron-left",
                },
              }}
              date
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              dayMaxEventRows={2}
              events={eventsArr}
              eventClick={(args) => {
                navigate(
                  `/media-corner/event/${parseInt(args.event._def.publicId)}`
                );
              }}
              eventBackgroundColor={"#f39e8e"}
              eventTextColor={"black"}
              eventBorderColor={true}
              headerToolbar={{
                start: "",
                right: "prev,next",
                center: "title",
              }}
              editable={false}
              locale="ar"
              height={"600px"}
            />
          </div>
          <div
            className={
              events.result
                ? events.result?.length
                  ? `col-xl-6 col-12 px-3`
                  : `col-xl-6 col-12 px-3 d-flex justify-content-center align-items-center `
                : `col-xl-6 col-12 px-3 mt-xl-0 mt-3`
            }
          >
            {events?.result ? (
              events.result.length ? (
                events.result.map((item) => {
                  let slicedContent = item.brief_AR;
                  if (item.brief_AR !== null && item.brief_AR.length > 250) {
                    const brief = item.brief_AR;
                    slicedContent = brief.substring(0, 250).concat(" ...");
                  }

                  eventsArr.push({
                    id: item.id,
                    title: item.title_AR,
                    start: moment(new Date(item.startDate))
                      .lang("en")
                      .format("YYYY-MM-DDTHH:MM:SS"),
                    end: moment(new Date(item.endDate))
                      .lang("en")
                      .format("YYYY-MM-DDTHH:MM:SS"),
                  });
                  return (
                    <Fade dalay={200} key={item.id}>
                      <div>
                        <h4 className="text-muted">{item.eventCategoryName}</h4>
                      </div>
                      <div className="fs-5">{item.title_AR}</div>
                      <div>
                        <p>{slicedContent}</p>
                      </div>
                      <div className="d-flex flex-wrap justify-content-between mt-5">
                        <div
                          style={{ color: "#d8b65e" }}
                          className="p-3 bg_gradient text-white"
                        >{`${moment(new Date(item.startDate)).format(
                          "LL"
                        )} -  ${moment(new Date(item.endDate)).format(
                          "LL"
                        )}`}</div>
                        <div className="align-items-center d-flex">
                          <Link to={`/media-corner/event/${item.id}`}>
                            <button
                              className="myButton mx-1 mb-2 mb-sm-0"
                              style={{ verticalAlign: "middle" }}
                            >
                              <span>المزيد</span>
                            </button>
                          </Link>
                        </div>
                      </div>
                      <div
                        className="my-3"
                        style={{
                          height: "1px",
                          width: "60%",
                          backgroundColor: "gray",
                          margin: "auto",
                        }}
                      ></div>
                    </Fade>
                  );
                })
              ) : (
                <div> لا توجد احداث هذا الشهر </div>
              )
            ) : (
              <AgendaSkeleton />
            )}
          </div>
        </div>
        <div className="container d-flex justify-content-end">
          <Link to="/media-corner/event">
            <button
              className="btn_blue mx-1 mb-2 mb-sm-0"
              style={{ verticalAlign: "middle", backgroundColor: "#bc4a2f" }}
            >
              <span>عرض الكل</span>
            </button>
          </Link>
        </div>
      </>

      <div className="line mt-5"></div>
    </div>
  );
};

export default ActivityAgenda;
