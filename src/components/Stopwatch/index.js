import "./index.scss";
import React, { useState, useEffect, useRef } from "react";
import cn from "classnames";
import dateUtils from "../../utils/date";

const Stopwatch = ({ value, play, onPlayChange, onTick, onDelete }) => {
  const [interval, setInter] = useState(null);

  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = onTick;
  }, [onTick]);

  useEffect(() => {
    _setPlay(play);
    
    return () => {
      _setPlay(false);
    };
  }, [play]);

  const _setPlay = (p) => {
    _clearInterval();
    if (p) {
      setInter(
        setInterval(() => {
          _tick(value++);
        }, 1000)
      );
    }
  };

  const _togglePlay = () => {
    onPlayChange(!play);
  };

  const _resetStopwatch = () => {
    _tick(0);
    onPlayChange(false);
  };

  const _deleteStopwatch = () => {
    _clearInterval();
    onDelete();
  };

  const _tick = (v) => {
    savedCallback.current(v);
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
        onClick={_deleteStopwatch}
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

export default Stopwatch;
