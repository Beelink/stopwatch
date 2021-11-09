import "./index.scss";
import React, { useState } from "react";
import Stopwatch from "../Stopwatch";

function StopwatchList() {
  const [stopwatches, setStopwatches] = useState([
    {
      id: 0,
      value: 0,
      play: false,
      syncStamp: null,
    },
  ]);

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
}

export default StopwatchList;
