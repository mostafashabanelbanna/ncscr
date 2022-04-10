import * as types from "../constants/actionTypes";

const initialState = {
  data: [],
  params: {
    title: "",
    publishDateFrom: "",
    publishDateTo: "",
  },
  count: 1,
};
const news = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_NEWS:
      return {
        ...state,
        data: action.data,
        count: action.count,
        params: action.params,
      };
    // case types.CLEAR_NEWS:
    //   return {
    //     ...state,
    //     data: action.data,
    //   };
    default:
      return news;
  }
};

export default news;
