import { api } from "../utils/api";

export const fetchUserAlbums = (userId) => async (dispatch) => {
  try {
    const response = await api.get(`/albums?userId=${userId}`);
    const albums = response.data;
    dispatch({ type: "FETCH_USER_ALBUMS_SUCCESS", payload: albums });
    return albums;
  } catch (error) {
    dispatch({ type: "FETCH_USER_ALBUMS_ERROR", payload: error.message });
    throw error;
  }
};
