import { HistoryItem } from "./historyItem";
import { Stopwatch } from "./stopwatch";

export type StopwatchState = {
  stopwatches: Stopwatch[];
  history: HistoryItem[];
};

export type GlobalState = {
  stopwatch: StopwatchState;
};
