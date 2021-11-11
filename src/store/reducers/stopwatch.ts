import { StopwatchState } from "../../types/state";
import stopwatchInitialState from "../initialStates/stopwatch";

import {
  ADD_STOPWATCH,
  REMOVE_STOPWATCH,
  UPDATE_STOPWATCH_VALUE,
  PLAY_STOPWATCH,
  SET_STOPWATCHES,
  ADD_STOPWATCH_TO_HISTORY,
  SET_HISTORY,
} from "../actionNames/stopwatch";
import { StopwatchAction } from "../actionTypes/stopwatch";

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
    case ADD_STOPWATCH_TO_HISTORY:
      const item = action.payload.data;
      if (!item.finish) {
        item.finish = new Date().valueOf();
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
    default:
      return state;
  }
};

export default stopwatchReducer;
