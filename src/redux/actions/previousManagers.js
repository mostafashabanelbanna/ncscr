import * as api from "../../api";
import * as types from "../constants/actionTypes";

export const getPreviousManagers =
  (pageNumber, keywords = {}, pageSize = 9) =>
  async (dispatch) => {
    dispatch({ type: types.IS_LOADING });
    try {
      const { data } = await api.fetchPreviousManagers(
        pageNumber,
        keywords,
        pageSize
      );
      const countRes = await api.previousManagersResultCount(keywords);
      console.log(data);

      dispatch({
        type: types.FETCH_PERVIOUS_MANAGERS,
        data: data.result,
        count: countRes.data.result,
        params: keywords,
      });
      dispatch({ type: types.IS_NOT_LOADING });
    } catch (error) {
      console.log(error.message);
      dispatch({ type: types.IS_NOT_LOADING });
    }
  };
