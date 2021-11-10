import { ADD_STOPWATCH, REMOVE_STOPWATCH } from "../types/stopwatch";

export const addStopwatch = (data) => {
  return {
    type: ADD_STOPWATCH,
    payload: {
      data,
    },
  };
};

export const removeStopwatch = (id) => {
  return {
    type: REMOVE_STOPWATCH,
    payload: {
      id,
    },
  };
};

export const updateStopwatchValue = (id, value) => {
  return {
    type: REMOVE_STOPWATCH,
    payload: {
      id,
      value,
    },
  };
};
