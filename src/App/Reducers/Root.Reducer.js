import { combineReducers } from "redux";

import pexelBayReducer from "./AppReducer/PexelBay.Reducer";

export const rootReducer = combineReducers({
  pexelBay: pexelBayReducer,
});
