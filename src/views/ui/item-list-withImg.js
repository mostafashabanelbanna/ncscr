import { Link } from "react-router-dom";
import { cutString } from "../../utils/utils";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
const ListItem = (props) => {
  console.log(window.location.origin + props.link);
  return (
    <>
      <div
        key={props.key}
        className="my-3  col-xl-4 col-md-6 col-12  "
        style={{ cursor: "pointer" }}
      >
        <Link
          // to=
          to={props.link}
          className=" text-dark text-decoration-none"
          style={{ zIndex: 1000, cursor: "pointer" }}
        >
          <div>
            <div
              className=" justify-content-between rounded-3 mx-3 p-2"
              style={{
                boxShadow: "1px 3px 1px #9E9E9E",
                maxHeight: 220,
                minHeight: 220,
                position: "relative",
              }}
            >
              <div style={{ clear: "both" }}>
                <div style={{ float: "left", width: "50%" }} className="px-2">
                  <img
                    alt={props.title}
                    style={{ height: `${props.imgHeight}px` }}
                    className="w-100 "
                    src={props.imgPath}
                  />
                  <p style={{ fontSize: 12 }} className="my-1 text-center">
                    {props.publisher}
                  </p>
                </div>
                {props.issue ? cutString(props.issue, 200) : null}
                {cutString(props.title, 150)}
              </div>
              <div
                className="d-flex  align-content-between p-0 rounded-3 col-11"
                style={{ position: "absolute", bottom: 0 }}
              >
                <div className="my-3 col-6 text-muted mx-2">{props.date}</div>
                <div className="d-flex col-6 justify-content-around my-3 ">
                  <div style={{ cursor: "pointer", zIndex: 100 }}>
                    <FacebookShareButton
                      url={window.location.origin + props.link}
                      quote={props.title}
                      className="Demo__some-network__share-button"
                    >
                      <FacebookIcon size={32} round />
                    </FacebookShareButton>
                    {/* <FaFacebookF /> */}
                  </div>
                  <div style={{ cursor: "pointer", zIndex: 100 }}>
                    {/* <FaTwitter /> */}
                    <TwitterShareButton
                      url={window.location.origin + props.link}
                      title={props.title}
                      className="Demo__some-network__share-button"
                    >
                      <TwitterIcon size={32} round />
                    </TwitterShareButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </Link>
      </div>
    </>
  );
};

export default ListItem;
