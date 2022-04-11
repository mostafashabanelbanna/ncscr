import Modal from "react-bootstrap/Modal";
import React, { useEffect, useState } from "react";
import { path } from "../../Path/media-path";

const InfographList = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Modal
        key={props.key}
        size="lg"
        scrollable={true}
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeLabel="" closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img className="img-fluid" src={props.imgPath} />
          <p className="my-2">{props.description}</p>
        </Modal.Body>
      </Modal>
      <div className="my-3  col-xl-4 col-sm-6 col-12  p-2">
        <div
          onClick={handleShow}
          style={{ cursor: "pointer" }}
          className="h-100 d-flex justify-content-center flex-column align-items-center"
        >
          <img
            className="img-fluid"
            style={{ height: "300px" }}
            src={props.imgPath}
          />
          <h5 className="text-center my-3">{props.title}</h5>
        </div>
      </div>
    </>
  );
};

export default InfographList;
