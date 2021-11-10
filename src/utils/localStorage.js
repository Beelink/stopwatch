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
};

export default locStorage;
