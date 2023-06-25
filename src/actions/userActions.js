import { api } from "../utils/api";

export const fetchUsers = () => async (dispatch) => {
  try {
    const response = await api.get("/users");
    dispatch({ type: "FETCH_USERS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "FETCH_USERS_ERROR", payload: error.message });
  }
};
