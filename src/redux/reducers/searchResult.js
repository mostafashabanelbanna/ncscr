import * as types from "../constants/actionTypes";

const initialState = {
  data: [],
  params: "",
  count: 1,
};
const searchResult = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_SEARCH_RESULT:
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

export default searchResult;
