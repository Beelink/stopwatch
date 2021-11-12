import { HistorySortMethod } from "../../enums/historySortMethod";
import { HistoryItem } from "../../types/historyItem";
import { Stopwatch } from "../../types/stopwatch";
import {
  ADD_STOPWATCH,
  REMOVE_STOPWATCH,
  UPDATE_STOPWATCH_VALUE,
  PLAY_STOPWATCH,
  SET_STOPWATCHES,
  SET_HISTORY,
  SET_HISTORY_SORT_METHOD,
  ADD_HISTORY_ITEM,
  REQUEST_TIMER_START,
  REQUEST_TIMER_SUCCESS,
  REQUEST_TIMER_FAIL,
} from "./stopwatch.actions";

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

export const addHistoryItem = (data: HistoryItem) => {
  return {
    type: ADD_HISTORY_ITEM,
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

export const setHistorySortMethod = (method: HistorySortMethod) => {
  return {
    type: SET_HISTORY_SORT_METHOD,
    payload: {
      method,
    },
  };
};

export const requestTimerStart = (id: number) => {
  return {
    type: REQUEST_TIMER_START,
    payload: {
      id,
    },
  };
};

export const requestTimerSuccess = (id: number) => {
  return {
    type: REQUEST_TIMER_SUCCESS,
    payload: {
      id,
    },
  };
};

export const requestTimerFail = (id: number) => {
  return {
    type: REQUEST_TIMER_FAIL,
    payload: {
      id,
    },
  };
};
