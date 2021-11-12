import { useDispatch, useSelector } from "react-redux";
import "./index.scss";
import Stopwatch from "../Stopwatch";
import { FunctionComponent, useEffect } from "react";
import localStorageUtils from "../../utils/localStorage";
import stopwatchUtils from "../../utils/stopwatch";
import { setStopwatches } from "../../store/stopwatch/stopwatch.actions";
import { GlobalState } from "../../types/state";

const StopwatchList: FunctionComponent = () => {
  const dispatch = useDispatch();
  const stopwatches = useSelector(
    (state: GlobalState) => state.stopwatch.stopwatches
  );

  useEffect(() => {
    const sw = localStorageUtils.loadStopwatches();
    if (sw && sw.length) {
      sw.map((value) => {
        if (value.syncStamp) {
          if (value.play) {
            value.value += Math.round(
              (new Date().valueOf() - value.syncStamp) / 1000
            );
          }
        }
        return value;
      });
      dispatch(setStopwatches(sw));
    } else {
      dispatch(setStopwatches([stopwatchUtils.generateNewStopwatch("")]));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorageUtils.saveStopwatches(stopwatches);
  }, [stopwatches]);

  return (
    <div className="stopwatch-list">
      <ul className="stopwatch-list__list">
        {stopwatches && stopwatches.length > 0 ? (
          stopwatches.map((stopwatch) => {
            return (
              <li key={stopwatch.id}>
                <Stopwatch {...stopwatch} />
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
};

export default StopwatchList;
