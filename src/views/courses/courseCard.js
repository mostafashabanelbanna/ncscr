import { path } from "../../Path/media-path";
import { FaCalendarAlt } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";
import { BsPeopleFill } from "react-icons/bs";
import moment from "moment";
import "moment/locale/ar";
import { Link } from "react-router-dom";
const CourseCard = ({ item }) => {
  return (
    <div
      key={item.id}
      style={{ backgroundColor: "#ba482f" }}
      className="col-md-5 mx-lg-4 mx-1 mx-md-3 col-lg-3 my-4 col-11 flex-column d-flex justify-content-between  p-3 rounded-3"
    >
      <div className="m-2">
        <img
          height="150"
          className="w-100"
          src={`${path.courses}${item.id}/Photo_AR/${item.photo_AR}`}
        />
      </div>
      <h5 style={{ minHeight: 85 }} className="pb-3 fs-4 text-center">
        {" "}
        {item.courseName}{" "}
      </h5>
      <div className="d-flex flex-column">
        <div className="d-flex p-2">
          <div className="mx-2">
            {" "}
            <FaCalendarAlt />
          </div>
          <div className="mx-2">
            {moment(new Date(item.publishDate)).format("LL")}
          </div>
        </div>
        <div className=" d-flex p-2">
          <div className="mx-2">
            <IoIosTime />
          </div>
          <div className="mx-2">{item.timeInterval}</div>
        </div>
        <div className=" d-flex p-2">
          <div className="mx-2">
            <BsPeopleFill />
          </div>
          <div className="mx-2">{item.targetCategory}</div>
        </div>
      </div>
      <div className="d-flex justify-content-center ">
        {" "}
        <Link to={`/media-corner/course-training/${item.id}`}>
          <button className="btn btn-light w-75">محتوى البرنامج</button>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
