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
const courses = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_COURSES:
      return {
        ...state,
        data: action.data,
        count: action.count,
        params: action.params,
      };

    default:
      return state;
  }
};

export default courses;
