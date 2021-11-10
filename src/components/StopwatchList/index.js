import { connect } from "react-redux";
import "./index.scss";
import Stopwatch from "../Stopwatch";
import React, { useEffect } from "react";
import localStorageUtils from "../../utils/localStorage";
import stopwatchUtils from "../../utils/stopwatch";
import { setStopwatches } from "../../store/actions/stopwatch";

const StopwatchList = ({ stopwatches, setStopwatches }) => {
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
      setStopwatches(sw);
    } else {
      setStopwatches([stopwatchUtils.generateNewStopwatch()]);
    }
  }, []);

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

const mapStateToProps = (state) => {
  return {
    stopwatches: state.stopwatch.stopwatches,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setStopwatches: (stopwatches) => dispatch(setStopwatches(stopwatches)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StopwatchList);
