import "./index.scss";
import React, { useState, useEffect } from "react";
import cn from "classnames";

function Stopwatch({ value, play, playChanged, onTick }) {
  const [interval, setInter] = useState(null);

  useEffect(() => {
    if (play) {
      _setPlay(true);
    }
  }, []);

  const _setPlay = (p) => {
    if (p) {
      setInter(
        setInterval(() => {
          onTick(value++);
        }, 1000)
      );
    } else {
      clearInterval(interval);
      setInter(null);
    }
    playChanged(p);
  };

  const _togglePlay = () => {
    _setPlay(!play);
  };

  const _resetStopwatch = () => {
    _setPlay(false);
    onTick(0);
  };

  const _formatValue = (value) => {
    let secNum = parseInt(value, 10);
    let hours = Math.floor(secNum / 3600);
    let minutes = Math.floor((secNum - hours * 3600) / 60);
    let seconds = secNum - hours * 3600 - minutes * 60;

    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    return hours + ":" + minutes + ":" + seconds;
  };

  return (
    <div className="stopwatch">
      <h3 className="stopwatch__value">{_formatValue(value)}</h3>
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
          <button className="stopwatch__button" onClick={_resetStopwatch}>
            <span>Reset</span>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Stopwatch;
