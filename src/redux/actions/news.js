import * as api from "../../api";
import * as types from "../constants/actionTypes";

export const getNews = (pageNumber, keywords, pageSize) => async (dispatch) => {
  try {
    const { data } = await api.fetchNews(pageNumber, keywords, pageSize);
    dispatch({ type: types.FETCH_NEWS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
