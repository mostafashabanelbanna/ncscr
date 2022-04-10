import Skeleton from "react-loading-skeleton";
import { Container } from "react-bootstrap";

export const NewsLoading = () => (
  <>
    <div className="m-auto container">
      <div className="row ">
        <div className="col-6">
          <Skeleton width={"100%"} count={7} />
        </div>
        <div className="col-6">
          <Skeleton width={"100%"} height={150} />
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <Skeleton width={"100%"} height={100} />
          <Skeleton width={"100%"} count={3} />
        </div>
        <div className="col-3">
          <Skeleton width={"100%"} height={100} />
          <Skeleton width={"100%"} count={3} />
        </div>
        <div className="col-3">
          <div>
            <Skeleton width={"100%"} height={60} />
            <Skeleton width={"100%"} count={1} />
          </div>
          <div>
            <Skeleton width={"100%"} height={60} />
            <Skeleton width={"100%"} count={1} />
          </div>
        </div>
      </div>
    </div>
  </>
);

export const GeneralLoading = () => (
  <>
    <div className="m-auto container">
      <Skeleton width={"100%"} count={7} />
    </div>
  </>
);

export const AgendaSkeleton = () => {
  return (
    <>
      <Container>
        <Skeleton width="100%" height={170} className="my-3" />
        <Skeleton width="100%" height={170} />
        <Skeleton width="100%" height={170} className="my-3" />
      </Container>
    </>
  );
};
