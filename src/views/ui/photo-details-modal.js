import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const DetailsModalComponent = (props) => {
  let title = props.content?.title;
  if (props.content.title === null) {
    title = props.content?.caption;
  }
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      {...props}
      backdrop="static"
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.details ? (
            <Link to={props.details} className="text-dark">
              <div className="d-flex">{title}</div>
            </Link>
          ) : (
            <div className="d-flex">{title}</div>
          )}
        </Modal.Title>
        <FontAwesomeIcon
          icon={faTimes}
          onClick={props.onHide}
          style={{ cursor: "pointer", fontSize: "22px" }}
          className="align-self-start my-1 ms-2 text-danger"
        />
      </Modal.Header>
      <Modal.Body>
        <img
          src={`${props.pathName}${props.content?.mainId ?? ""}${
            props.content?.mainId ? "/" : ""
          }${props.content?.fileName_AR ?? props.content}`}
          style={{ height: "500px" }}
          className="w-100"
        />
      </Modal.Body>
    </Modal>
  );
};

export default DetailsModalComponent;
