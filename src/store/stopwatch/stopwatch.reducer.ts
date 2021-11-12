import { StopwatchState } from "../../types/state";
import stopwatchInitialState from "./stopwatch.initialState";

import {
  ADD_STOPWATCH,
  REMOVE_STOPWATCH,
  UPDATE_STOPWATCH_VALUE,
  PLAY_STOPWATCH,
  SET_STOPWATCHES,
  ADD_HISTORY_ITEM,
  SET_HISTORY,
  SET_HISTORY_SORT_METHOD,
  REQUEST_TIMER_START,
  REQUEST_TIMER_SUCCESS,
  REQUEST_TIMER_FAIL,
} from "./stopwatch.actions";
import { StopwatchAction } from "./stopwatch.actionTypes";
import historyUtils from "../../utils/history";

const stopwatchReducer = (
  state: StopwatchState = stopwatchInitialState,
  action: StopwatchAction
): StopwatchState => {
  switch (action.type) {
    case ADD_STOPWATCH:
      return {
        ...state,
        stopwatches: [...state.stopwatches, action.payload.stopwatch],
      };
    case REMOVE_STOPWATCH:
      return {
        ...state,
        stopwatches: state.stopwatches.filter(
          (stopwatch) => stopwatch.id !== action.payload.id
        ),
      };
    case UPDATE_STOPWATCH_VALUE:
      return {
        ...state,
        stopwatches: state.stopwatches.map((stopwatch) => {
          if (stopwatch.id === action.payload.id) {
            stopwatch.value = action.payload.value;
            stopwatch.syncStamp = new Date().valueOf();
          }
          return stopwatch;
        }),
      };
    case PLAY_STOPWATCH:
      return {
        ...state,
        stopwatches: state.stopwatches.map((stopwatch) => {
          if (stopwatch.id === action.payload.id) {
            stopwatch.play = action.payload.play;
            if (action.payload.play) {
              if (!stopwatch.start) {
                stopwatch.start = new Date().valueOf();
              }
            } else {
              stopwatch.finish = new Date().valueOf();
            }
          }
          return stopwatch;
        }),
      };
    case SET_STOPWATCHES:
      return {
        ...state,
        stopwatches: action.payload.stopwatches,
      };
    case ADD_HISTORY_ITEM:
      const item = action.payload.data;
      if (!item.finish) {
        item.finish = new Date().valueOf();
      }
      if (!item.posNumber) {
        item.posNumber = state.history.length;
      }
      return {
        ...state,
        history: [item, ...state.history],
      };
    case SET_HISTORY:
      return {
        ...state,
        history: action.payload.history,
      };
    case SET_HISTORY_SORT_METHOD:
      return {
        ...state,
        historySortMethod: action.payload.method,
        history: historyUtils.sortHistory(state.history, action.payload.method),
      };
    case REQUEST_TIMER_START:
      return {
        ...state,
        stopwatches: state.stopwatches.map((stopwatch) => {
          if (stopwatch.id === action.payload.id) {
            stopwatch.pending = true;
          }
          return stopwatch;
        }),
      };
    case REQUEST_TIMER_SUCCESS:
      return {
        ...state,
        stopwatches: state.stopwatches.map((stopwatch) => {
          if (stopwatch.id === action.payload.id) {
            stopwatch.pending = false;
          }
          return stopwatch;
        }),
      };
    case REQUEST_TIMER_FAIL:
      return {
        ...state,
        stopwatches: state.stopwatches.map((stopwatch) => {
          if (stopwatch.id === action.payload.id) {
            stopwatch.pending = false;
          }
          return stopwatch;
        }),
      };
    default:
      return state;
  }
};

export default stopwatchReducer;
