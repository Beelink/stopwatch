import "./index.scss";
import { FunctionComponent } from "react";
import cn from "classnames";
import dateUtils from "../../utils/date";
import {
  removeStopwatch,
  playStopwatch,
  updateStopwatchValue,
  addStopwatchToHistory,
} from "../../store/actions/stopwatch";
import { Props } from "./props";
import { useDispatch } from "react-redux";
import useInterval from "use-interval";

const Stopwatch: FunctionComponent<Props> = ({
  id,
  value,
  play,
  description,
  start,
  finish,
}) => {
  const dispatch = useDispatch();

  useInterval(
    () => {
      dispatch(updateStopwatchValue(id, value + 1));
    },
    play ? 1000 : null
  );

  const _addStopwatchToHistory = () => {
    if (value > 0) {
      dispatch(
        addStopwatchToHistory({
          description,
          start,
          value,
          finish,
        })
      );
    }
  };

  const _togglePlay = () => {
    dispatch(playStopwatch(id, !play));
  };

  const _resetStopwatch = () => {
    dispatch(updateStopwatchValue(id, 0));
    dispatch(playStopwatch(id, false));
    _addStopwatchToHistory();
  };

  const _removeStopwatch = () => {
    dispatch(playStopwatch(id, false));
    _addStopwatchToHistory();
    dispatch(removeStopwatch(id));
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
      {description ? (
        <h4 className="stopwatch__description">{description}</h4>
      ) : (
        <h4 className="stopwatch__description stopwatch__description--empty">
          No description
        </h4>
      )}
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
