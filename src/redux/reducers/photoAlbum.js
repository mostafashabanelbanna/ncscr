import * as types from "../constants/actionTypes";

const initialState = {
  data: [],
  params: {
    title: "",
  },
  count: 1,
};
const photoAlbum = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_PHOTO_ALBUM:
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

export default photoAlbum;
