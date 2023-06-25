import { combineReducers } from "redux";
import albumReducer from "./albumReducer";
import userReducer from "./userReducer";
import postReducer from "./postReducer";

const rootReducer = combineReducers({
  user: userReducer,
  post: postReducer,
  album: albumReducer,
});

export default rootReducer;
