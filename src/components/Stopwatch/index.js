import "./index.scss";
import React, { useState, useEffect } from "react";
import cn from "classnames";
import dateUtils from "../../utils/date";
import {
  removeStopwatch,
  playStopwatch,
  updateStopwatchValue,
  addStopwatchToHistory,
} from "../../store/actions/stopwatch";
import { connect } from "react-redux";

const Stopwatch = ({
  id,
  value,
  play,
  description,
  start,
  removeStopwatch,
  playStopwatch,
  updateStopwatchValue,
  addStopwatchToHistory,
}) => {
  const [interval, setInter] = useState(null);

  useEffect(() => {
    _enableCounter(play);

    return () => {
      _enableCounter(false);
    };
  }, [play]);

  const _enableCounter = (enable) => {
    _clearInterval();
    if (enable) {
      setInter(
        setInterval(() => {
          updateStopwatchValue(id, value++);
        }, 1000)
      );
    }
  };

  const _togglePlay = () => {
    playStopwatch(id, !play);
  };

  const _resetStopwatch = () => {
    if (value > 0) {
      addStopwatchToHistory({
        description,
        start,
        value,
      });
    }
    updateStopwatchValue(id, 0);
    playStopwatch(id, false);
  };

  const _removeStopwatch = () => {
    if (value > 0) {
      addStopwatchToHistory({
        description,
        start,
        value,
      });
    }
    playStopwatch(id, false);
    removeStopwatch(id);
  };

  const _clearInterval = () => {
    if (interval) {
      clearInterval(interval);
      setInter(null);
    }
  };

  return (
    <div className="stopwatch">
      <button
        title="Delete stopwatch"
        className="stopwatch__delete"
        onClick={_removeStopwatch}
      >
        Delete
      </button>
      <h3 className="stopwatch__value">{dateUtils.formatValue(value)}</h3>
      <ul className="stopwatch__buttons">
        <li>
          <button
            className={cn({
              stopwatch__button: true,
              "stopwatch__button--blue": play,
            })}
            onClick={_togglePlay}
          >
            {play ? <span>Pause</span> : <span>Play</span>}
          </button>
        </li>
        <li>
          <button
            disabled={!play}
            className="stopwatch__button"
            onClick={_resetStopwatch}
          >
            <span>Reset</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeStopwatch: (id) => dispatch(removeStopwatch(id)),
    playStopwatch: (id, play) => dispatch(playStopwatch(id, play)),
    updateStopwatchValue: (id, value) =>
      dispatch(updateStopwatchValue(id, value)),
    addStopwatchToHistory: (data) => dispatch(addStopwatchToHistory(data)),
  };
};

export default connect(null, mapDispatchToProps)(Stopwatch);
