import "./index.scss";
import React, {
  forwardRef,
  useState,
  useImperativeHandle,
  useEffect,
} from "react";
import Stopwatch from "../Stopwatch";
import localStorageUtils from "../../utils/localStorage";

const StopwatchList = forwardRef((props, ref) => {
  const [stopwatches, setStopwatches] = useState([]);

  useEffect(() => {
    const sw = localStorageUtils.loadStopwatches();
    if (sw.length) {
      sw.map((value) => {
        if (value.syncStamp) {
          if (value.play) {
            value.value += Math.round((new Date().valueOf() - value.syncStamp) / 1000);
          }
        }
        return value;
      });
      setStopwatches(sw);
    } else {
      setStopwatches([_generateStopwatchData()]);
    }
  }, []);

  useEffect(() => {
    localStorageUtils.saveStopwatches(stopwatches);
  }, [stopwatches]);

  useImperativeHandle(ref, () => ({
    addStopwatch() {
      _addStopwatch();
    },
  }));

  const _generateStopwatchData = () => {
    return {
      id: new Date().valueOf(),
      value: 0,
      play: false,
      syncStamp: null,
    };
  };

  const _addStopwatch = () => {
    let newArr = [...stopwatches];
    newArr.push(_generateStopwatchData());
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
        item.syncStamp = new Date().valueOf();
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
        {stopwatches.length ? (
          stopwatches.map((stopwatch) => {
            return (
              <li key={stopwatch.id}>
                <Stopwatch
                  {...stopwatch}
                  onTick={(value) => {
                    _updateStopwatchValue(stopwatch.id, value);
                  }}
                  onPlayChange={(value) => {
                    _updateStopwatchPlay(stopwatch.id, value);
                  }}
                  onDelete={() => {
                    _deleteStopwatch(stopwatch.id);
                  }}
                />
              </li>
            );
          })
        ) : (
          <span className="stopwatch-list__empty">
            No stopwatches, try to create one
          </span>
        )}
      </ul>
    </div>
  );
});

export default StopwatchList;
