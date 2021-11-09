import "./index.scss";
import React, { forwardRef, useState, useImperativeHandle } from "react";
import Stopwatch from "../Stopwatch";

const StopwatchList = forwardRef(({}, ref) => {
  const [stopwatches, setStopwatches] = useState([
    {
      id: 0,
      value: 0,
      play: false,
      syncStamp: null,
    },
  ]);

  useImperativeHandle(ref, () => ({
    addStopwatch() {
      _addStopwatch();
    }
  }));

  const _addStopwatch = () => {
    let newArr = [...stopwatches];
    newArr.push({
      id: new Date().valueOf(),
      value: 0,
      play: false,
      syncStamp: null,
    });
    setStopwatches(newArr);
  };

  const _updateStopwatchPlay = (index, value) => {
    let newArr = [...stopwatches];
    newArr[index].play = value;
    setStopwatches(newArr);
  };

  const _updateStopwatchValue = (index, value) => {
    let newArr = [...stopwatches];
    newArr[index].value = value;
    setStopwatches(newArr);
  };

  return (
    <div className="stopwatch-list">
      <ul className="stopwatch-list__list">
        {stopwatches.map((stopwatch, index) => {
          return (
            <li key={stopwatch.id}>
              <Stopwatch
                {...stopwatch}
                onTick={(value) => {
                  _updateStopwatchValue(index, value);
                }}
                playChanged={(value) => {
                  _updateStopwatchPlay(index, value);
                }}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
});

export default StopwatchList;
