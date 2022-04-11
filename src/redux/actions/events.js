import * as api from "../../api";
import * as types from "../constants/actionTypes";

export const getEvents =
  (pageNumber, keywords = {}, pageSize = 9) =>
  async (dispatch) => {
    dispatch({ type: types.IS_LOADING });
    try {
      const { data } = await api.fetchEvents(pageNumber, keywords, pageSize);
      const countRes = await api.eventsResultCount(keywords);

      dispatch({
        type: types.FETCH_EVENTS,
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
