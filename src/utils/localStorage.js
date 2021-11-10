const locStorage = {
  saveStopwatches: (stopwatches) => {
    localStorage.setItem("stopwatches", JSON.stringify(stopwatches));
  },
  loadStopwatches: () => {
    let stopwatches = [];
    if (localStorage.getItem("stopwatches")) {
      stopwatches = JSON.parse(localStorage.getItem("stopwatches"));
    }
    return stopwatches;
  },
  saveHistory: (history) => {
    localStorage.setItem("history", JSON.stringify(history));
  },
  loadHistory: () => {
    let history = [];
    if (localStorage.getItem("history")) {
      history = JSON.parse(localStorage.getItem("history"));
    }
    return history;
  },
};

export default locStorage;
