import React, { useState } from "react";
import { addComment } from "../../api/index";
import MyModal from "../ui/modal";

const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [successShow, setSuccessShow] = useState(false);
  const [dangerShow, setDangerShow] = useState(false);

  const feedBack = async (e) => {
    let obj = {
      email,
      name_AR: name,
      name_EN: name,
      subject,
      commentTitle: message,
    };
    let res;
    e.preventDefault();

    try {
      res = await addComment(obj);
    } catch (e) {
      res = e.response;
    }
    if (res.status <= 206) {
      setSuccessShow(true);
      setEmail("");
      setMessage("");
      setSubject("");
      setName("");
    } else setDangerShow(true);
  };

  return (
    <div>
      <div className="container p-0 ">
        <div className=" d-flex flex-wrap p-0 justify-content-center my-3">
          <div className="col-md-4 col-10 mx-3 p-0 order-sm-1 order-2">
            <div>
              <h3 className="mt-4 me-2">
                <u>اتصل بنا </u>
              </h3>
            </div>
            <div className="p-4 mt-4" style={{ backgroundColor: "#eeecec" }}>
              <form
                onSubmit={feedBack}
                id="form_id"
                className="justify-content-center col-12"
              >
                <div className="form-group mb-3 mt-2">
                  <input
                    value={name}
                    required
                    onChange={(e) => {
                      setName(e.currentTarget.value);
                    }}
                    type="text"
                    className="form-control border-0"
                    placeholder="الاسم"
                  />
                </div>
                <div className="form-group mb-3 mt-2">
                  <input
                    value={email}
                    required
                    onChange={(e) => {
                      setEmail(e.currentTarget.value);
                    }}
                    type="email"
                    className="form-control border-0"
                    placeholder="البريد الالكتروني"
                  />
                </div>
                <div className="form-group mb-3 mt-2">
                  <input
                    required
                    onChange={(e) => {
                      setSubject(e.currentTarget.value);
                    }}
                    type="text"
                    className="form-control border-0"
                    placeholder="الموضوع"
                    value={subject}
                  />
                </div>
                <div className="form-group mb-3 mt-2">
                  <textarea
                    value={message}
                    onChange={(e) => {
                      setMessage(e.currentTarget.value);
                    }}
                    placeholder="الرسالة"
                    className="form-control border-0"
                    rows="3"
                  ></textarea>
                </div>
                <div className="mb-2 container col-6 justify-content-center">
                  <button
                    // onClick={}
                    style={{ backgroundColor: "#cacbcb" }}
                    type="submit"
                    className="btn border-0 col-12"
                  >
                    ارسال
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-7 col-10 mx-3 order-sm-2 order-1  me-0 p-0">
            <div className="my-4 ">
              <h3 className=" ">
                <u>الموقع الجغرافي </u>
              </h3>
            </div>

            <iframe
              style={{ padding: "0%", height: "355px" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.0034503804313!2d31.205847115115642!3d30.065435581874652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584119a026118b%3A0x606fe1c2089a7300!2sNational%20Center%20For%20Social%20%26%20Criminological%20Research!5e0!3m2!1sen!2seg!4v1640600067194!5m2!1sen!2seg"
              width="100%"
              height="auto"
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
          <MyModal
            dialogClassName="success"
            show={successShow}
            onHide={() => setSuccessShow(false)}
          />
          <MyModal
            dialogClassName="danger"
            show={dangerShow}
            onHide={() => setDangerShow(false)}
          />
        </div>
      </div>
    </div>
    // </div>
  );
};
export default ContactUs;
