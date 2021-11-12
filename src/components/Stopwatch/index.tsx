import "./index.scss";
import { FunctionComponent, useState } from "react";
import cn from "classnames";
import dateUtils from "../../utils/date";
import {
  playStopwatch,
  removeStopwatch,
  requestTimerStart,
  updateStopwatchValue,
  addHistoryItem,
  setHistorySortMethod,
} from "../../store/stopwatch/stopwatch.actionCreators";
import { Props } from "./props";
import { useDispatch, useSelector } from "react-redux";
import useInterval from "use-interval";
import Loader from "../Loader";
import { GlobalState } from "../../types/state";

const Stopwatch: FunctionComponent<Props> = ({
  id,
  value,
  play,
  description,
  start,
  finish,
  pending,
}) => {
  const dispatch = useDispatch();
  const historySortMethod = useSelector(
    (state: GlobalState) => state.stopwatch.historySortMethod
  );

  useInterval(
    () => {
      dispatch(updateStopwatchValue(id, value + 1));
    },
    play ? 1000 : null
  );

  const _addStopwatchToHistory = () => {
    if (value > 0) {
      dispatch(
        addHistoryItem({
          description,
          start,
          value,
          finish,
          posNumber: null,
        })
      );
      dispatch(setHistorySortMethod(historySortMethod));
    }
  };

  const _togglePlay = () => {
    dispatch(playStopwatch(id, !play));
    if (!play) {
      dispatch(requestTimerStart(id));
    }
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
        disabled={pending}
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
            disabled={pending}
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
            disabled={!play || pending}
            className="stopwatch__button"
            onClick={_resetStopwatch}
          >
            <span>Reset</span>
          </button>
        </li>
      </ul>
      {pending && <Loader />}
    </div>
  );
};

export default Stopwatch;
