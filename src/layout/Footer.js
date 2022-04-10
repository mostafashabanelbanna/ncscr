import React from "react";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { BiPhone } from "react-icons/bi";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";
import { FaYoutube } from "react-icons/fa";
import mainlogo from "../public/logo-0١.png";

const Footer = () => {
  return (
    <div>
      <div className="abovefooter d-none d-md-block">
        <div className="d-flex col-lg-8 col-10 m-auto pt-lg-2 pt-0 justify-content-center text-center  ">
          <div className="col-4 py-2 d-flex  justify-content-center">
            <div className="p-2 text-white "> Info@ncscr.gov.eg</div>
            <div className="d-flex">
              <MdEmail color={"white"} size={40} />
            </div>
          </div>
          <div className="col-4 py-2 d-flex justify-content-center">
            <div className="px-2 text-start text-white">
              <div> 0233473655</div>
              <div> 0233461440</div>
            </div>
            <BiPhone color={"white"} size={40} />
          </div>
          <div className="col-4 py-2 d-flex justify-content-center">
            <div className="px-2  text-white">
              <div> 4 ميدان ابن خلدون،، مدينة الأعلام، حي العجوزة، الجيزة</div>
              <div>فاكس : 0233036069 </div>
            </div>
            <ImLocation2 color={"white"} size={40} />
          </div>
        </div>
        <div className="d-flex col-9 justify-content-center container pt-lg-2 px-1 align-items-center">
          <div className="col-3 d-flex  align-items-center">
            <h5 className="text-white mb-0 ">تواصل معنا</h5>
          </div>
          <div className="col-lg-2 col-md-6 d-flex justify-content-around  pt-0">
            <div className="px-4">
              <a
                style={{ zIndex: 1000 }}
                href={"https://www.facebook.com/ncscr.eg"}
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookSquare color={"white"} size={40} />
              </a>
            </div>
            <div className="px-4">
              <a
                style={{ zIndex: 1000 }}
                href={
                  "https://www.youtube.com/channel/UCEjkTLNmxEbnYYpBKDQsWBg"
                }
                target="_blank"
                rel="noreferrer"
              >
                <FaYoutube color={"white"} size={40} />
              </a>
            </div>
            <div className="px-4">
              <a
                style={{ zIndex: 1000 }}
                href={"https://www.instagram.com/ncscreg83/"}
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram color={"white"} size={40} />
              </a>
            </div>
            <div className="px-4">
              <a
                style={{ zIndex: 1000 }}
                href={"https://twitter.com/NcscrEg"}
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineTwitter color={"white"} size={40} />
              </a>
            </div>
          </div>
          {/* <div className="col-6 d-flex justify-content-end">
          <ImMobile  size={32}/>
          Mobile: (+1) 800 433 633
          </div> */}
        </div>
      </div>
      <div>
        <div className="footerbg">
          <div className="custom_contanier ">
            <div className="row p-0 m-0  pt-4 pb-4 d-flex justify-content-end align-items-center">
              <div className="text-light col-lg-2 col-md-2 container-xxl m-md-0 container-md col-6 d-flex flex-column">
                <img
                  className="mb-2 p-3 bg-light rounded-circle"
                  src={mainlogo}
                />
                {/* <div className=' d-flex col-9  mb-3 container-xxl p-0 text-center'>
                          <div className='col-3'> <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon></div>
                          <div className='col-3'> <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></div>
                          <div className='col-3'> <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></div>
                          <div className='col-3'> <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon></div>
                      </div> */}
              </div>

              <div className="col-md-9  col-12">
                <div className="footer d-flex text-light flex-md-nowrap justify-content-md-center flex-wrap">
                  <div className=" col-md-3 col-6 p-2">
                    <div className="searcher_title">
                      <div className="d-inline-flex flex-column position-relative">
                        <p>عن المركز</p>
                      </div>
                    </div>

                    <div className="lh-lg d-flex flex-column py-2">
                      <Link to="/static-content/14">نبذه عن المركز</Link>
                      <Link to="/static-content/2"> النشأة </Link>
                      <Link to="/static-content/3">الرؤية والاهداف</Link>
                      <Link to="/static-content/12">
                        السيرة الذاتية لمدير المركز
                      </Link>
                      <Link to="/previous-managers">المدراء السابقون</Link>
                      <Link to="/org-chart">الهيكل التنظيمي</Link>
                      <Link to="/members">أعضاء هيئة البحوث</Link>
                      <Link to="#">مكتبة المركز</Link>
                    </div>
                  </div>
                  <div className="col-md-3 col-6 py-2">
                    <div className="searcher_title">
                      <div className="d-inline-flex flex-column position-relative">
                        <p>المنصة البحثية</p>
                      </div>
                    </div>
                    <div className="lh-lg d-flex flex-column py-2">
                      <Link to="/document-library/1">التقارير والدراسات</Link>
                      <Link to="/document-library/2">الدوريات البحثية</Link>
                      <Link to="/document-library/3">بقلم باحث</Link>
                      <Link to="/document-library/10003/1">المرصد</Link>
                      <Link to="/document-library/10003/2">انفوجراف</Link>
                    </div>
                  </div>
                  <div className="col-md-3 col-6 p-2">
                    <div className="searcher_title">
                      <div className="d-inline-flex flex-column position-relative">
                        <p> المركز الاعلامي</p>
                      </div>
                    </div>
                    <div className=" lh-lg d-flex flex-column">
                      <Link to="/media-corner/news">أخبار المركز</Link>
                      <Link to="/media-corner/photo">معرض الصور</Link>
                      <Link to="/media-corner/video">معرض الفيديو</Link>
                      <Link to="/media-corner/event">فعاليات المركز</Link>
                      <Link to="/media-corner/course-training/">
                        الدورات التدريبية
                      </Link>
                    </div>
                  </div>
                  {/* <div className="col-md-3 col-6 p-2">
                  <div className="searcher_title">
                    <div className="d-inline-flex flex-column position-relative">
                      <p>تواصل معنا </p>
                    </div>
                  </div>
                  <div className="lh-lg d-flex flex-column">
                    <a>آراء ومقترحات</a>
                    <a>الموقع الجغرافي</a>
                    <a>اتصل بنا</a>
                    <a>اشترك معنا</a>
                  </div>
                </div> */}
                </div>
                <div className="text-light text-center mt-4 mt-md-5 ">
                  حقوق النشر © الصادرة 0.4 - 2021 مركز المعلومات ودعم اتخاذ
                  القرار - جميع الحقوق محفوظة
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
