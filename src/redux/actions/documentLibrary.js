import * as api from "../../api";
import * as types from "../constants/actionTypes";

export const getDocumentLibrary =
  (pageNumber, additionalData, keywords = {}, pageSize = 9) =>
  async (dispatch) => {
    dispatch({ type: types.IS_LOADING });
    try {
      if (additionalData.length === 1) {
        keywords.documentLibraryTypeID = parseInt(additionalData[0]);
      } else {
        keywords.documentLibraryTypeID = parseInt(additionalData[0]);
        keywords.observatoryTypeID = parseInt(additionalData[1]);
      }
      const { data } = await api.fetchDocumentLibrary(
        pageNumber,
        keywords,
        pageSize
      );
      const countRes = await api.documentLibraryResultCount(keywords);

      dispatch({
        type: types.FETCH_DOCUMENT_LIBRARY,
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
