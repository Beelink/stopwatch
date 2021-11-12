import { HistoryItem } from "../../types/historyItem";
import { Stopwatch } from "../../types/stopwatch";
import {
  ADD_STOPWATCH,
  ADD_STOPWATCH_TO_HISTORY,
  PLAY_STOPWATCH,
  REMOVE_STOPWATCH,
  SET_HISTORY,
  SET_STOPWATCHES,
  UPDATE_STOPWATCH_VALUE,
} from "./stopwatch.actionNames";

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

type AddStopwatchToHistoryAction = {
  type: typeof ADD_STOPWATCH_TO_HISTORY;
  payload: {
    data: HistoryItem;
  };
};

type SetHistoryAction = {
  type: typeof SET_HISTORY;
  payload: {
    history: Stopwatch[];
  };
};

export type StopwatchAction =
  | AddStopwatchAction
  | RemoveStopwatchAction
  | UpdateStopwatchAction
  | PlayStopwatchAction
  | SetStopwatchesAction
  | AddStopwatchToHistoryAction
  | SetHistoryAction;
