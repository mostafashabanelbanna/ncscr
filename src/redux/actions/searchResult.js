import * as api from "../../api";
import * as types from "../constants/actionTypes";

export const getSearchResult =
  (pageNumber, keyword = "", pageSize = 9) =>
  async (dispatch) => {
    dispatch({ type: types.IS_LOADING });
    try {
      const { data } = await api.fetchSearchResult(
        pageNumber,
        keyword,
        pageSize
      );
      console.log(data);
      // const countRes = await api.eventsResultCount(keyword);

      dispatch({
        type: types.FETCH_SEARCH_RESULT,
        data: data.result,
        // count: countRes.data.result,
        params: keyword,
      });
      dispatch({ type: types.IS_NOT_LOADING });
    } catch (error) {
      console.log(error.message);
      dispatch({ type: types.IS_NOT_LOADING });
    }
  };
