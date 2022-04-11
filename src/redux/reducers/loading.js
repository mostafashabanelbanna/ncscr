import * as types from "../constants/actionTypes";

const initialState = {
  loading: true,
};
const loading = (state = initialState, action) => {
  switch (action.type) {
    case types.IS_NOT_LOADING:
      return {
        loading: false,
      };
    case types.IS_LOADING:
      return {
        loading: true,
      };

    default:
      return state;
  }
};

export default loading;
