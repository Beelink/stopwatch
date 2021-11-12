import { HistorySortMethod } from "../enums/historySortMethod";
import { HistoryItem } from "./historyItem";
import { Stopwatch } from "./stopwatch";

export type StopwatchState = {
  stopwatches: Stopwatch[];
  history: HistoryItem[];
  historySortMethod: HistorySortMethod;
};

export type GlobalState = {
  stopwatch: StopwatchState;
};
