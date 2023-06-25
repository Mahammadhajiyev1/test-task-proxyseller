const initialState = {
  posts: [],
  loading: true,
  error: null,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USER_POSTS_SUCCESS":
      return { ...state, posts: action.payload, loading: false };
    case "FETCH_USER_POSTS_ERROR":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default postReducer;
