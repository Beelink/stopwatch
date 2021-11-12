import { all, call, put, takeLatest } from "redux-saga/effects";

import {
  requestTimerSuccess,
  requestTimerFail,
} from "./stopwatch.actionCreators";
import { REQUEST_TIMER_START } from "./stopwatch.actions";
import timeoutUtils from "../../utils/timeout";
import { RequestTimerStart } from "./stopwatch.actionTypes";

const _delay = () => timeoutUtils.delay();

function* requestTimerStartWorker(action: RequestTimerStart) {
  try {
    yield call(_delay);
    yield put(requestTimerSuccess(action.payload.id));
  } catch (e) {
    yield put(requestTimerFail(action.payload.id));
  }
}

function* stopwatchSaga() {
  yield all([takeLatest(REQUEST_TIMER_START, requestTimerStartWorker)]);
}

export default stopwatchSaga;
