import * as api from "../../api";
import * as types from "../constants/actionTypes";

export const getPhotoAlbum =
  (pageNumber, keywords = {}, pageSize = 9) =>
  async (dispatch) => {
    try {
      const { data } = await api.fetchPhotoAlbum(
        pageNumber,
        keywords,
        pageSize
      );
      const countRes = await api.photoAlbumResultCount(keywords);

      dispatch({
        type: types.FETCH_PHOTO_ALBUM,
        data: data.result,
        count: countRes.data.result,
        params: keywords,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
