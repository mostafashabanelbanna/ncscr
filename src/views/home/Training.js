import React, { useState, useEffect } from "react";
import { fetchHomeTraining } from "../../api";
import { GeneralLoading } from "../ui/LoadingScreens";
import CourseCard from "../courses/courseCard";

const Training = () => {
  const [training, setTraining] = useState();

  const getTraining = async () => {
    const { data } = await fetchHomeTraining();

    setTraining(data.result);
  };

  useEffect(() => {
    getTraining();
  }, []);

  const noTraining = !training || (training && training.length === 0);

  return (
    <div>
      {" "}
      {!noTraining && (
        <div className="bg-light py-3">
          <div className=" container my-5">
            <h3 className="text-end my-2">
              <u>دورات تدريبية</u>
            </h3>
            <div
              className={`text-white d-flex flex-wrap flex-md-row flex-column ${
                training.length < 2
                  ? "justify-content-start"
                  : "justify-content-center"
              }`}
            >
              {training.map((item) => {
                return <CourseCard item={item} />;
              })}
            </div>
          </div>
        </div>
      )}
      {noTraining && (
        <>
          <GeneralLoading />
        </>
      )}
    </div>
  );
};

export default Training;
