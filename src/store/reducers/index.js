import Reducer1 from "./reducer1";
import UserReducer from "./user.reducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  reducer1: Reducer1,
  user_reducer: UserReducer,
});

export default rootReducer;
