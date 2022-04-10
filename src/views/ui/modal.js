import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
function MyModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{ zIndex: 100000000 }}
      backdrop="static"
    >
      <Modal.Body>
        {props.dialogClassName != "danger" ? (
          <div className="d-flex flex-column align-items-center">
            <FontAwesomeIcon
              icon={faCheck}
              className="align-self-center text-success my-5 fa-3x"
            />
            <h4>تم الإرسال بنجاح</h4>
          </div>
        ) : (
          <div className="d-flex flex-column align-items-center">
            <FontAwesomeIcon
              icon={faTimes}
              className="align-self-center text-danger my-5 fa-3x"
            />
            <h4>لم يتم الإرسال هناك خطأ في البيانات </h4>
            <h4>أعد المحاول مرة اخرى</h4>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button
          style={{ backgroundColor: "#bc4a2f", borderColor: "gray" }}
          onClick={props.onHide}
        >
          إغلاق
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyModal;
