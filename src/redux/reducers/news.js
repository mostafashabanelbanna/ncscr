import * as types from "../constants/actionTypes";

const news = (posts = [], action) => {
  switch (action.type) {
    case types.FETCH_NEWS:
      return action.payload;
    default:
      return posts;
  }
};

export default news;
