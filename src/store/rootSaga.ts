import { all, fork } from "redux-saga/effects";

import stopwatchSaga from "./stopwatch/stopwatch.saga";

function* rootSaga() {
  yield all([fork(stopwatchSaga)]);
}

export default rootSaga;
