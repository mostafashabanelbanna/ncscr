const DetailsItem = (props) => {
  return (
    <>
      <div key={props.key} className="container">
        <div className="col-12 my-3 px-3 container">
          <h2> {props.title}</h2>
          <div className="page_title"></div>
        </div>
        <div className="px-3">
          {props.issue ? (
            <div className="py-2 fst-italic">السلسلة : {props.issue}</div>
          ) : null}
          {props.publish ? (
            <div className="py-2 fst-italic">الناشر : {props.publish}</div>
          ) : null}
          {props.writer ? (
            <div className="py-2 fst-italic">الكاتب : {props.writer}</div>
          ) : null}
          {props.publishers?.length ? (
            <div className="py-2 fst-italic">
              الناشرون : {props.publishers?.join(" , ")}
            </div>
          ) : null}
          {props.date ? (
            <div className="fst-italic">التاريخ : {props.date}</div>
          ) : null}
          <div className="d-flex justify-content-between">
            {props.place ? (
              <div className="fst-italic">المكان : {props.place}</div>
            ) : null}
            {props.price ? (
              <div className="fst-italic mx-3">السعر : {props.price}</div>
            ) : null}
          </div>
        </div>
        <div className="d-flex flex-column flex-lg-row my-1">
          <div className="col-lg-8  col-12 lh-lg  p-3 order-1 order-lg-0">
            {props.content ? (
              <div
                style={{ textAlign: "justify" }}
                dangerouslySetInnerHTML={{
                  __html: props.content.replaceAll("<br>", " <br> </ br> "),
                }}
              ></div>
            ) : null}
          </div>
          <div className="col-lg-4 col-12 p-3 order-0 order-lg-1 ">
            <img className="w-100" src={props.imgPath} />
          </div>
        </div>
        {props.pdf ? (
          <div className="container py-2">
            <iframe
              className="embed-responsive-item w-100"
              style={{ height: 500 }}
              src={props.pdfSrc + props.pdf}
              allowFullScreen
            ></iframe>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default DetailsItem;
