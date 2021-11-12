import { HistoryItem } from "../../types/historyItem";
import { Stopwatch } from "../../types/stopwatch";
import {
  ADD_STOPWATCH,
  REMOVE_STOPWATCH,
  UPDATE_STOPWATCH_VALUE,
  PLAY_STOPWATCH,
  SET_STOPWATCHES,
  ADD_STOPWATCH_TO_HISTORY,
  SET_HISTORY,
} from "../actionNames/stopwatch";

export const addStopwatch = (stopwatch: Stopwatch) => {
  return {
    type: ADD_STOPWATCH,
    payload: {
      stopwatch,
    },
  };
};

export const removeStopwatch = (id: number) => {
  return {
    type: REMOVE_STOPWATCH,
    payload: {
      id,
    },
  };
};

export const updateStopwatchValue = (id: number, value: number) => {
  return {
    type: UPDATE_STOPWATCH_VALUE,
    payload: {
      id,
      value,
    },
  };
};

export const playStopwatch = (id: number, play: boolean) => {
  return {
    type: PLAY_STOPWATCH,
    payload: {
      id,
      play,
    },
  };
};

export const setStopwatches = (stopwatches: Stopwatch[]) => {
  return {
    type: SET_STOPWATCHES,
    payload: {
      stopwatches,
    },
  };
};

export const addStopwatchToHistory = (data: HistoryItem) => {
  return {
    type: ADD_STOPWATCH_TO_HISTORY,
    payload: {
      data,
    },
  };
};

export const setHistory = (history: HistoryItem[]) => {
  return {
    type: SET_HISTORY,
    payload: {
      history,
    },
  };
};
