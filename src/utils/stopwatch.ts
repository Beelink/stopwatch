import { Stopwatch } from "../types/stopwatch";

const stopwatchUtils = {
  generateNewStopwatch: (description: string): Stopwatch => {
    return {
      id: new Date().valueOf(),
      value: 0,
      play: false,
      description,
      start: null,
      finish: null,
      syncStamp: null,
    };
  },
};

export default stopwatchUtils;
