import * as types from "../constants/actionTypes";

const initialState = {
  data: [],
  params: {
    name: "",
  },
  count: 1,
};
const previousManagers = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_PERVIOUS_MANAGERS:
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

export default previousManagers;
