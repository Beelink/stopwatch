import "./index.scss";
import { useDispatch } from "react-redux";
import { FunctionComponent, useRef } from "react";
import { addStopwatch } from "../../store/actions/stopwatch";
import stopwatchUtils from "../../utils/stopwatch";

const AddStopwatchButton: FunctionComponent = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const _addStopwatch = () => {
    if (inputRef.current) {
      dispatch(
        addStopwatch(stopwatchUtils.generateNewStopwatch(inputRef.current.value))
      );
      inputRef.current.value = "";
    }
  };

  return (
    <div className="add-stopwatch-button">
      <input
        className="add-stopwatch-button__input"
        type="text"
        ref={inputRef}
        placeholder="Stopwatch description"
      />
      <button
        title="Create stopwatch"
        onClick={_addStopwatch}
        className="add-stopwatch-button__button"
      >
        +
      </button>
    </div>
  );
};

export default AddStopwatchButton;
