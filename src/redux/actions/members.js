import * as api from "../../api";
import * as types from "../constants/actionTypes";

export const getMembers =
  (pageNumber, keywords = {}, pageSize = 9) =>
  async (dispatch) => {
    dispatch({ type: types.IS_LOADING });
    try {
      const { data } = await api.fetchMembers(pageNumber, keywords, pageSize);
      const countRes = await api.membersResultCount(keywords);
      console.log(data);

      dispatch({
        type: types.FETCH_MEMBERS,
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
