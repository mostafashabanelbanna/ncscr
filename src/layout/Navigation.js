import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import SearchInput from "./searchInput";

import mainLogo from "../public/logo-0١.png";

const Menu = () => {
  const location = useLocation();
  const [expand, setExpand] = useState(false);
  const [showAbout, setAbout] = useState(false);
  const [showResearchPlatform, setResearchPlatform] = useState(false);
  const [showMediaCorner, setMediaCorner] = useState(false);

  const showDropDown = (item) => {
    switch (item) {
      case "showAbout":
        setAbout(!showAbout);
        break;
      case "showResearchPlatform":
        setResearchPlatform(!showResearchPlatform);
        break;
      case "showMediaCorner":
        setMediaCorner(!showMediaCorner);
        break;
      default:
        return;
    }
  };

  const hideDropDown = (item) => {
    switch (item) {
      case "hideAbout":
        setAbout(!showAbout);
        break;
      case "hideResearchPlatform":
        setResearchPlatform(!showResearchPlatform);
        break;
      case "hideMediaCorner":
        setMediaCorner(!showMediaCorner);
        break;
      default:
        return;
    }
  };

  const toggleNavbar = () => {
    setExpand(!expand);
  };

  const closeNavbar = () => {
    setExpand(false);
  };

  return (
    <div className="container-fluid sticky-top ">
      {location.pathname == "/" ? (
        <img
          style={{ cursor: "pointer" }}
          className="main_logo  bg-light rounded-circle"
          src={mainLogo}
        />
      ) : (
        <Link to="/">
          <img
            style={{ cursor: "pointer" }}
            className="main_logo  bg-light rounded-circle"
            src={mainLogo}
          />
        </Link>
      )}
      <div className="row flex-column-reverse flex-sm-row bg-dark text-light p-0 ">
        <div className="col-lg-5 "></div>

        <div className="col-lg-6 col-sm-9 d-flex justify-content-lg-between justify-content-end py-1">
          <div className="d-flex justify-content-end mx-2">
            <SearchInput />
          </div>

          <div className=" d-none d-lg-flex  justify-content-end">
            <div className="d-none d-lg-flex align-items-end">
              <a
                href="https://www.facebook.com/ncscr.eg"
                target="_blank"
                className="mx-2"
                rel="noreferrer"
              >
                {FaFacebookF()}
              </a>
              <a
                href="https://twitter.com/NcscrEg"
                target="_blank"
                className="mx-2"
                rel="noreferrer"
              >
                {FaTwitter()}
              </a>
              <a
                href="https://www.instagram.com/ncscreg"
                target="_blank"
                className="mx-2"
                rel="noreferrer"
              >
                {FaInstagram()}
              </a>
              <a
                href="https://www.youtube.com/channel/UCEjkTLNmxEbnYYpBKDQsWBg"
                target="_blank"
                className="mx-2"
                rel="noreferrer"
              >
                {FaYoutube()}
              </a>
              {/* <a className="mx-2">
                <FaPhone className="mx-2" />
                اتصل بنا
              </a> */}
            </div>
          </div>
        </div>

        <div className="col-lg-1 col-sm-3 text-center bg-danger py-2">
          بث تجريبي
        </div>
      </div>
      <div className="row py-2 bg-light">
        <div className="col-lg-2"></div>
        <div className="col-lg-8 px-5">
          <h4 className="header_title text-center mb-0 ">
            المركز القومي للبحوث الاجتماعية والجنائية
          </h4>
        </div>
      </div>

      <div
        className="row main_menu pb-2"
        style={{ borderBottom: "4px solid white" }}
      >
        <Navbar
          className="pb-0"
          onToggle={() => toggleNavbar()}
          expanded={expand}
          collapseOnSelect
          expand="lg"
          variant="dark"
        >
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse
              className="justify-content-center"
              id="responsive-navbar-nav"
            >
              <Nav className="align-items-center">
                <ul className="navbar-nav mr-auto">
                  <li
                    className={`nav-item ${
                      location.pathname == "/" ? "active" : ""
                    }`}
                  >
                    {/* <a className="nav-link text-center" style={{cursor:'pointer'}}>
                     <Link  href={`/`}>{location.pathname!='/'?'الرئيسية':' '}</Link>
                    {location.pathname!='/'?'':'الرئيسية'}
                    </a> */}
                    <div className="nav-link single_item text-center">
                      <Link to="/">
                        <a onClick={closeNavbar}>
                          {" "}
                          {location.pathname != "/" ? "الرئيسية" : " "}
                        </a>
                      </Link>
                      <span style={{ cursor: "pointer" }}>
                        {location.pathname != "/" ? "" : "الرئيسية"}
                      </span>
                    </div>
                  </li>
                  <span className="p-lg-2 text-white text-center"> - </span>
                  <li
                    className={`nav-item ${
                      location.pathname.split("/")[1] == "static-content" ||
                      location.pathname.split("/")[1] == "previous-managers" ||
                      location.pathname.split("/")[1] == "members"
                        ? "active"
                        : ""
                    }`}
                  >
                    <NavDropdown
                      className="text-center"
                      title={<span> عن المركز</span>}
                      show={showAbout}
                      onMouseEnter={() => showDropDown("showAbout")}
                      onMouseLeave={() => hideDropDown("hideAbout")}
                    >
                      <NavDropdown.Item>
                        <Link to="/static-content/14">
                          <a onClick={closeNavbar}> عن المركز</a>
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link to="/static-content/2">
                          <a onClick={closeNavbar}> النشأة</a>
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link to="/static-content/3">
                          <a onClick={closeNavbar}> الرؤية والأهداف</a>
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link to="/static-content/12">
                          <a onClick={closeNavbar}>
                            {" "}
                            السيرة الذاتية لمدير المركز
                          </a>
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link to="/previous-managers">
                          <a onClick={closeNavbar}> المدراء السابقون</a>
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link to="/org-chart">
                          <a onClick={closeNavbar}> الهيكل التنظيمي</a>
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link to="/members">
                          <a onClick={closeNavbar}> أعضاء هيئة البحوث</a>
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link to="#">
                          <a onClick={closeNavbar}> مكتبة المركز</a>
                        </Link>
                      </NavDropdown.Item>
                    </NavDropdown>
                  </li>
                  <span className="p-lg-2 text-white text-center"> - </span>
                  <li
                    className={`nav-item ${
                      location.pathname.split("/")[1] == "document-library"
                        ? "active"
                        : ""
                    }`}
                  >
                    <NavDropdown
                      className="text-center"
                      title={<span> المنصة البحثية</span>}
                      show={showResearchPlatform}
                      onMouseEnter={() => showDropDown("showResearchPlatform")}
                      onMouseLeave={() => hideDropDown("hideResearchPlatform")}
                    >
                      <NavDropdown.Item>
                        <Link to="/document-library/1">
                          <a onClick={closeNavbar}> التقارير البحثية</a>
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link to="/document-library/2">
                          <a onClick={closeNavbar}> الدوريات البحثية</a>
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link to="/document-library/3">
                          <a onClick={closeNavbar}> بقلم باحث</a>
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link to="/document-library/10003/1">
                          <a onClick={closeNavbar}> المرصد الاجتماعي</a>
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link to="/document-library/10003/2">
                          <a onClick={closeNavbar}> إنفوجراف</a>
                        </Link>
                      </NavDropdown.Item>
                    </NavDropdown>
                  </li>
                  <span className="p-lg-2 text-white text-center"> - </span>
                  <li
                    className={`nav-item ${
                      location.pathname.split("/")[1] == "media-corner"
                        ? "active"
                        : ""
                    }`}
                  >
                    <NavDropdown
                      className="text-center"
                      title={<span> المركز الإعلامي</span>}
                      show={showMediaCorner}
                      onMouseEnter={() => showDropDown("showMediaCorner")}
                      onMouseLeave={() => hideDropDown("hideMediaCorner")}
                    >
                      <NavDropdown.Item>
                        <Link to="/media-corner/news">
                          <a onClick={closeNavbar}>الأخبار</a>
                        </Link>
                      </NavDropdown.Item>
                      <div className="dropdown-item">
                        <Link
                          to="/media-corner/photo-album"
                          // as={"/media-corner/photo/index.html"}
                        >
                          <a onClick={closeNavbar}>معرض الصور</a>
                        </Link>
                      </div>
                      <NavDropdown.Item>
                        <Link to="/media-corner/video-library">
                          <a onClick={closeNavbar}>معرض الفيديو</a>
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link to="/media-corner/events">
                          <a onClick={closeNavbar}>فعاليات المركز</a>
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link to="/media-corner/course-training/">
                          <a onClick={closeNavbar}> الدورات التدريبية</a>
                        </Link>
                      </NavDropdown.Item>
                    </NavDropdown>
                  </li>
                  <span className="p-lg-2 text-white text-center"> - </span>

                  <li
                    className={`nav-item ${
                      location.pathname == "/contact-us" ? "active" : ""
                    }`}
                  >
                    <div className="nav-link single_item text-center">
                      <Link to="/contact-us">
                        <a onClick={closeNavbar}>تواصل معنا</a>
                      </Link>
                    </div>
                  </li>
                  <li className="nav-item d-lg-none d-block">
                    <div className="d-flex justify-content-center">
                      <div>
                        <a
                          style={{ color: "#fff" }}
                          href={"https://www.facebook.com/ncscr.eg"}
                          target="_blank"
                          className="mx-1"
                          rel="noreferrer"
                        >
                          <FaFacebookF />
                        </a>
                        <a
                          style={{ color: "#fff" }}
                          className="mx-1"
                          href={"https://www.facebook.com/ncscr.eg"}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaTwitter />
                        </a>
                        <a
                          style={{ color: "#fff" }}
                          href={"https://www.facebook.com/ncscr.eg"}
                          target="_blank"
                          className="mx-1"
                          rel="noreferrer"
                        >
                          <FaInstagram />
                        </a>
                        <a
                          style={{ color: "#fff" }}
                          href={"https://www.facebook.com/ncscr.eg"}
                          target="_blank"
                          className="mx-1"
                          rel="noreferrer"
                        >
                          <FaYoutube />
                        </a>
                      </div>
                      {/* <a style={{ color: "#fff" }} className="mx-2">
                        English
                      </a> */}
                    </div>
                  </li>
                </ul>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Menu;
