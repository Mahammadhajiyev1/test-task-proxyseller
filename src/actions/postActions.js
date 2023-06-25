import { api } from "../utils/api";

export const fetchUserPosts = (userId) => async (dispatch) => {
  try {
    const response = await api.get(`/posts?userId=${userId}`);
    dispatch({ type: "FETCH_USER_POSTS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "FETCH_USER_POSTS_ERROR", payload: error.message });
  }
};
