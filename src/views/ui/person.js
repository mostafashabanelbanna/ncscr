import { Col } from "react-bootstrap";

const Person = (props) => {
  return (
    <Col lg={4} className="my-4 p-2">
      <div
        className="d-flex rounded-3 h-100 w-100 p-2 m-2"
        style={{ boxShadow: "rgb(158 158 158) 1px 3px 1px" }}
      >
        <div
          style={{
            backgroundImage: `url("${props.imgPath}")`,
            height: "120px",
            width: "120px",
            borderRadius: "5%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="d-flex flex-column justify-content-start m-2">
          <h4>{props.name}</h4>
          <h6>{props.position}</h6>
          {props.jobStart && props.jobFinish ? (
            <div>
              <span>{props.jobStart}</span> : <span>{props.jobFinish}</span>
            </div>
          ) : null}
          {/* {props.jobTitle ? <div>{props.jobTitle}</div> : null} */}
        </div>
      </div>
    </Col>
  );
};

export default Person;
