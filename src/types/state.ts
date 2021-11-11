import { HistoryItem } from "./historyItem";
import { Stopwatch } from "./stopwatch";

export type State = {
  stopwatches: Stopwatch[];
  history: HistoryItem[];
};
