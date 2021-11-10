import {
  ADD_STOPWATCH,
  REMOVE_STOPWATCH,
  UPDATE_STOPWATCH_VALUE,
  PLAY_STOPWATCH,
  SET_STOPWATCHES,
} from "../types/stopwatch";

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
    type: UPDATE_STOPWATCH_VALUE,
    payload: {
      id,
      value,
    },
  };
};

export const playStopwatch = (id, play) => {
  return {
    type: PLAY_STOPWATCH,
    payload: {
      id,
      play,
    },
  };
};

export const setStopwatches = (stopwatches) => {
  return {
    type: SET_STOPWATCHES,
    payload: {
      stopwatches,
    },
  };
};
