import { HistoryItem } from "../types/historyItem";
import { Stopwatch } from "../types/stopwatch";

const localStorageUtils = {
  saveStopwatches: (stopwatches: Stopwatch[]) => {
    localStorage.setItem("stopwatches", JSON.stringify(stopwatches));
  },
  loadStopwatches: (): Stopwatch[] => {
    let stopwatches: Stopwatch[] = [];
    const item: string | null = localStorage.getItem("stopwatches");
    if (item) {
      stopwatches = JSON.parse(item);
    }
    return stopwatches;
  },
  saveHistory: (history: HistoryItem[]) => {
    localStorage.setItem("history", JSON.stringify(history));
  },
  loadHistory: (): HistoryItem[] => {
    let history: HistoryItem[] = [];
    const item: string | null = localStorage.getItem("history");
    if (item) {
      history = JSON.parse(item);
    }
    return history;
  },
};

export default localStorageUtils;
