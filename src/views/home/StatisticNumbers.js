import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { fetchHomeStatisticNumbers } from "../../api";
import { GeneralLoading } from "../ui/LoadingScreens";

import arrow_circel_01 from "../../public/arrow_circel-0١.png";

const StatisticNumbers = () => {
  const [statisticNumbers, setStatisticNumbers] = useState();

  const getStatisticNumbers = async () => {
    const { data } = await fetchHomeStatisticNumbers();

    setStatisticNumbers(data.result);
  };

  useEffect(() => {
    getStatisticNumbers();
  }, []);

  const noStatisticNumbers =
    !statisticNumbers || (statisticNumbers && statisticNumbers.length === 0);

  return (
    <div>
      {" "}
      {!noStatisticNumbers && (
        <div className="centerbg my-3 py-4 container">
          <div>
            <h3>
              <u>المركز في أرقام</u>
            </h3>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-md-3 col-sm-6  col-12 p-3"
              style={{ cursor: "pointer" }}
            >
              <Link to={"/members"}>
                <div
                  style={{ height: "120px", width: "120px", margin: "auto" }}
                  className="position-relative my-2 text-center"
                >
                  <img height="120" width="120" src={arrow_circel_01} />
                  <div
                    style={{ left: "50px", top: "40%" }}
                    className="position-absolute"
                  >
                    <h3>{statisticNumbers.membersCount}</h3>
                  </div>
                </div>
                <div className="text-center my-2">
                  <h5>اعضاء هيئة البحوث</h5>
                </div>
                <div className="text-muted text-center my-2">
                  من العلماء المتميزين في مختلف المجالات
                </div>
              </Link>
            </div>

            <div
              className="col-md-3 col-sm-6 col-12 p-3"
              style={{ cursor: "pointer" }}
            >
              <Link to={"/document-library/1"}>
                <div
                  style={{ height: "120px", width: "120px", margin: "auto" }}
                  className="position-relative my-2 text-center"
                >
                  <img height="120" width="120" src={arrow_circel_01} />
                  <div
                    style={{ left: "50px", top: "40%" }}
                    className="position-absolute"
                  >
                    <h3>{statisticNumbers.researchReportsCount}</h3>
                  </div>
                </div>
                <div className="text-center my-2">
                  <h5>تقارير بحثية</h5>
                </div>
                <div></div>
                <div className="text-muted text-center my-2">
                  من الكتب والتقارير والمقالات والنشرات في مختلف المجالات
                  البحثيه
                </div>
              </Link>
            </div>
            <div
              className="col-md-3 col-sm-6 col-12 p-3"
              style={{ cursor: "pointer" }}
            >
              <Link to={"/document-library/2"}>
                <div
                  style={{ height: "120px", width: "120px", margin: "auto" }}
                  className="position-relative my-2 text-center"
                >
                  <img height="120" width="120" src={arrow_circel_01} />
                  <div
                    style={{ left: "50px", top: "40%" }}
                    className="position-absolute"
                  >
                    <h3>{statisticNumbers.researchPeriodicalsCount}</h3>
                  </div>
                </div>
                <div className="text-center my-2">
                  <h5>دوريات</h5>
                </div>
                <div></div>
                <div className="text-muted text-center my-2">
                  على أعلى درجات الاحترافية والكفاءة
                </div>
              </Link>
            </div>
            <div
              className="col-md-3 col-sm-6 col-12 p-3"
              style={{ cursor: "pointer" }}
            >
              <Link to={"/media-corner/course-training/"}>
                <div
                  style={{ height: "120px", width: "120px", margin: "auto" }}
                  className="position-relative my-2 text-center"
                >
                  <img height="120" width="120" src={arrow_circel_01} />
                  <div
                    style={{ left: "50px", top: "40%" }}
                    className="position-absolute"
                  >
                    <h3>{statisticNumbers.trainingCoursesCount}</h3>
                  </div>
                </div>
                <div className="text-center my-2">
                  <h5>برامج تدريبية</h5>
                </div>
                <div></div>
                <div className="text-muted text-center my-2">
                  من مختلف الجهات والهيئات الدولية واقليمية
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
      {noStatisticNumbers && (
        <>
          <GeneralLoading />
        </>
      )}
    </div>
  );
};

export default StatisticNumbers;
