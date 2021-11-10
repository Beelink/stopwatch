import initialState from "../initialState";

import {
  ADD_STOPWATCH,
  REMOVE_STOPWATCH,
  UPDATE_STOPWATCH_VALUE,
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
            stopwatch.value = stopwatch.payload.value;
          }
          return stopwatch;
        }),
      };
    default:
      return state;
  }
};

export default stopwatchReducer;
