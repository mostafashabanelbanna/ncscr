import * as types from "../constants/actionTypes";

const initialState = {
  allData: [],
};
const news = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_NEWS:
      return {
        ...state,
        allData: action.payload,
      };
    default:
      return news;
  }
};

export default news;
