import initialState from "../initialState";

import {
  ADD_STOPWATCH,
  REMOVE_STOPWATCH,
  UPDATE_STOPWATCH_VALUE,
  PLAY_STOPWATCH,
  SET_STOPWATCHES,
  ADD_STOPWATCH_TO_HISTORY,
  CLEAR_HISTORY,
} from "../types/stopwatch";

const stopwatchReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_STOPWATCH:
      return {
        ...state,
        stopwatches: [...state.stopwatches, action.payload.data],
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
              stopwatch.end = new Date().valueOf();
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
      return {
        ...state,
        history: [...state.history, action.payload.data],
      };
    case CLEAR_HISTORY:
      return {
        ...state,
        history: [],
      };
    default:
      return state;
  }
};

export default stopwatchReducer;
