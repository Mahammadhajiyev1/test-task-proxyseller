const initialState = {
  albums: [],
  loading: true,
  error: null,
};

const albumReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USER_ALBUMS_SUCCESS":
      return { ...state, albums: action.payload, loading: false };
    case "FETCH_USER_ALBUMS_ERROR":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default albumReducer;
