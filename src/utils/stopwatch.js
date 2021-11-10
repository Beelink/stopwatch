const stopwatch = {
  generateNewStopwatch: (description) => {
    return {
      id: new Date().valueOf(),
      value: 0,
      play: false,
      description,
      start: null,
      finish: null,
    };
  },
};

export default stopwatch;
