import { combineReducers } from "redux";

import movieReducer from "./movieReducer";
import favoriReducer from "./favoriReducer";

const rootReducer = combineReducers({
  movieReducer,
  favoriReducer,
});

export default rootReducer;
