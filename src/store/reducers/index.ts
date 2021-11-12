import { combineReducers } from "redux";

import stopwatchReducer from "./stopwatch";

const rootReducer = combineReducers({
  stopwatch: stopwatchReducer,
});

export default rootReducer;
