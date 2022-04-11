import * as api from "../../api";
import * as types from "../constants/actionTypes";

export const getVideoLibrary =
  (pageNumber, keywords = {}, pageSize = 9) =>
  async (dispatch) => {
    try {
      const { data } = await api.fetchVideoLibrary(
        pageNumber,
        keywords,
        pageSize
      );
      const countRes = await api.videoLibraryResultCount(keywords);
      console.log(data);
      dispatch({
        type: types.FETCH_VIDEO_LIBRARY,
        data: data.result,
        count: countRes.data.result,
        params: keywords,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
