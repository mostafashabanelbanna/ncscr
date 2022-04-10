import * as api from "../../api";
import * as types from "../constants/actionTypes";

export const getNews =
  (pageNumber, keywords = {}, pageSize = 9) =>
  async (dispatch) => {
    try {
      const { data } = await api.fetchNews(pageNumber, keywords, pageSize);
      const countRes = await api.resultCount(keywords);

      dispatch({
        type: types.FETCH_NEWS,
        data: data.result,
        count: countRes.data.result,
        params: keywords,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

// export const clearNewsList = () => (dispatch) => {
//   dispatch({ type: types.CLEAR_NEWS, payload: null });
// };
