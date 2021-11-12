import { combineReducers } from "redux";

import stopwatchReducer from "./stopwatch/stopwatch.reducer";

const rootReducer = combineReducers({
  stopwatch: stopwatchReducer,
});

export default rootReducer;
