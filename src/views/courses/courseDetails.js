import { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import DetailsItem from "../ui/detailsItem";
import { courseDetail } from "../../store/action/courseActions";
import { path } from "../../Path/media-path";
import moment from "moment";
import { GeneralLoading } from "../ui/LoadingScreens";
import "moment/locale/ar";
import NewsDetailsItem from "../ui/newsDetailsItem";
const CourseDetails = (props) => {
  useEffect(() => {
    props.courseDetail(parseInt(props.params));
  }, []);
  if (props.course)
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
  return <GeneralLoading />;
};
const mapStateToProps = (state) => {
  return {
    course: state.courseComponents.coursedetail,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ courseDetail }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseDetails);
