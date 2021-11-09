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
    },
  }));

  const _addStopwatch = () => {
    let newArr = [...stopwatches];
    newArr.unshift({
      id: new Date().valueOf(),
      value: 0,
      play: false,
      syncStamp: null,
    });
    setStopwatches(newArr);
  };

  const _updateStopwatchPlay = (id, value) => {
    let newArr = [...stopwatches];
    newArr = newArr.map((item) => {
      if (item.id === id) {
        item.play = value;
      }
      return item;
    });
    setStopwatches(newArr);
  };

  const _updateStopwatchValue = (id, value) => {
    let newArr = [...stopwatches];
    newArr = newArr.map((item) => {
      if (item.id === id) {
        item.value = value;
      }
      return item;
    });
    setStopwatches(newArr);
  };

  const _deleteStopwatch = (id) => {
    let newArr = [...stopwatches];
    newArr = newArr.filter((value) => value.id !== id);
    setStopwatches(newArr);
  };

  return (
    <div className="stopwatch-list">
      <ul className="stopwatch-list__list">
        {stopwatches.map((stopwatch) => {
          return (
            <li key={stopwatch.id}>
              <Stopwatch
                {...stopwatch}
                onTick={(value) => {
                  _updateStopwatchValue(stopwatch.id, value);
                }}
                playChanged={(value) => {
                  _updateStopwatchPlay(stopwatch.id, value);
                }}
                onDelete={() => {
                  _deleteStopwatch(stopwatch.id);
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
