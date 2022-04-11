import React, { useState, useEffect } from "react";
import { fetchHomeInfographs } from "../../api";
import { GeneralLoading } from "../ui/LoadingScreens";
import { Modal } from "react-bootstrap";
import { path } from "../../Path/media-path";

const Infographs = () => {
  const [infographs, setInfographs] = useState();
  const [modalShow, setModalShow] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const getInfographs = async () => {
    const { data } = await fetchHomeInfographs();

    setInfographs(data.result);
  };

  useEffect(() => {
    getInfographs();
  }, []);

  const noInfographs = !infographs || (infographs && infographs.length === 0);

  return (
    <div>
      {" "}
      {!noInfographs && (
        <>
          <Modal
            //   {...props}
            show={modalShow}
            onHide={() => setModalShow(false)}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header>
              <Modal.Title id="contained-modal-title-vcenter">
                <h4>{modalContent.title_AR}</h4>
              </Modal.Title>
              <div
                style={{ cursor: "pointer", fontSize: "22px" }}
                onClick={() => setModalShow(false)}
              >
                x
              </div>
            </Modal.Header>
            <Modal.Body>
              <img
                alt={modalContent.description_AR}
                className="img-fluid rounded-3"
                src={
                  path.documentLibrary +
                  "/" +
                  modalContent.id +
                  "/cover_AR/" +
                  modalContent.cover_AR
                }
              />
              <p>{modalContent.description_AR}</p>
            </Modal.Body>
          </Modal>

          <div className="containershadow py-3">
            <div className="container">
              <h3 className="text-end my-3">
                <u>انفوجرافيك</u>
              </h3>
              <div className="d-flex flex-column flex-md-row flex-wrap">
                {infographs.map((item) => {
                  return (
                    <>
                      <div
                        key={item.id}
                        style={{ cursor: "pointer" }}
                        className="col-lg-3 col-md-6 col-12 px-2"
                        onClick={() => {
                          setModalShow(true);
                          setModalContent(item);
                        }}
                      >
                        <div className="my-2">
                          {" "}
                          <img
                            alt={item.description_AR}
                            className="w-100 rounded-3"
                            height="400"
                            src={
                              path.documentLibrary +
                              "/" +
                              item.id +
                              "/cover_AR/" +
                              item.cover_AR
                            }
                          />{" "}
                        </div>

                        <h5 className="text-muted  text-center">
                          {item.title_AR}
                        </h5>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      )}
      {noInfographs && (
        <>
          <GeneralLoading />
        </>
      )}
    </div>
  );
};

export default Infographs;
