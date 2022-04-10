import Skeleton from "react-loading-skeleton";

const ListSkelton = ({ height }) => {
  return (
    <>
      <div className="container">
        <div className="row my-4">
          <div className="col-md-4">
            <Skeleton width="100%" height={height} />
          </div>
          <div className="col-md-4">
            <Skeleton width="100%" height={height} />
          </div>
          <div className="col-md-4">
            <Skeleton width="100%" height={height} />
          </div>
        </div>
      </div>
    </>
  );
};
export default ListSkelton;
