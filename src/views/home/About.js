import React from "react";
import bannner from "../../public//bannner.png";

const About = () => {
  return (
    <div className="headerbg text-light">
      <div className="container">
        <div className="row flex-column-reverse flex-md-row ">
          <div className="col-md-8 px-4 d-flex flex-column justify-content-center ">
            <div className="my-2">
              <h2>المركز القومى للبحوث الاجتماعية والجنائية</h2>
              <div className="page_title_main"></div>
            </div>
            <div
              className="text-justify lh-lg"
              style={{ textAlign: "justify" }}
            >
              يستهدف المركز النهوض بالبحوث العلمية التى تتناول المسائل
              الاجتماعية المتصلة بسائر مقومات المجتمع، والمشاكل التى يعانى منها
              المجتمع المصرى؛ وذلك بغرض وضع الاسس اللازمة لسياسات اجتماعية
              رشيدة، والمساهمة فى عملية صنع هذه السياسات على أساس علمى سليم.
              وللمركز فى سبيل تحقيق أهدافه : إجراء البحوث والدراسات واشراف
              عليها، تنظيم الدورات التدريبية، نشر البحوث والبيانات العلمية
              وتبادلها مع الجهات العلمية الأخرى، إبداء الرأى فى مشروعات القوانين
              الخاصة بالمسائل الاجتماعية والجنائية.
            </div>
          </div>
          <div className="col-md-4 p-4  align-items-center d-flex justify-content-center">
            <img
              className="img-fluid rounded-circle"
              alt="bannner"
              src={bannner}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
