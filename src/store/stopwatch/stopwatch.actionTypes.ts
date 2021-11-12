import { HistorySortMethod } from "../../enums/historySortMethod";
import { HistoryItem } from "../../types/historyItem";
import { Stopwatch } from "../../types/stopwatch";
import {
  ADD_HISTORY_ITEM,
  ADD_STOPWATCH,
  PLAY_STOPWATCH,
  REMOVE_STOPWATCH,
  REQUEST_TIMER_START,
  REQUEST_TIMER_SUCCESS,
  SET_HISTORY,
  SET_HISTORY_SORT_METHOD,
  SET_STOPWATCHES,
  UPDATE_STOPWATCH_VALUE,
} from "./stopwatch.actions";

type AddStopwatchAction = {
  type: typeof ADD_STOPWATCH;
  payload: {
    stopwatch: Stopwatch;
  };
};

type RemoveStopwatchAction = {
  type: typeof REMOVE_STOPWATCH;
  payload: {
    id: number;
  };
};

type UpdateStopwatchAction = {
  type: typeof UPDATE_STOPWATCH_VALUE;
  payload: {
    id: number;
    value: number;
  };
};

type PlayStopwatchAction = {
  type: typeof PLAY_STOPWATCH;
  payload: {
    id: number;
    play: boolean;
  };
};

type SetStopwatchesAction = {
  type: typeof SET_STOPWATCHES;
  payload: {
    stopwatches: Stopwatch[];
  };
};

type AddHistoryItemAction = {
  type: typeof ADD_HISTORY_ITEM;
  payload: {
    data: HistoryItem;
  };
};

type SetHistoryAction = {
  type: typeof SET_HISTORY;
  payload: {
    history: HistoryItem[];
  };
};

type SetHistorySortMethodAction = {
  type: typeof SET_HISTORY_SORT_METHOD;
  payload: {
    method: HistorySortMethod;
  };
};

export type RequestTimerStart = {
  type: typeof REQUEST_TIMER_START;
  payload: {
    id: number;
  };
};

export type RequestTimerSuccess = {
  type: typeof REQUEST_TIMER_SUCCESS;
  payload: {
    id: number;
  };
};

export type StopwatchAction =
  | AddStopwatchAction
  | RemoveStopwatchAction
  | UpdateStopwatchAction
  | PlayStopwatchAction
  | SetStopwatchesAction
  | AddHistoryItemAction
  | SetHistoryAction
  | SetHistorySortMethodAction
  | RequestTimerStart
  | RequestTimerSuccess;
