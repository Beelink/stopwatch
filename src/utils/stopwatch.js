const stopwatch = {
  generateNewStopwatch: () => {
    return {
      id: new Date().valueOf(),
      value: 0,
      play: false,
    };
  },
};

export default stopwatch;
