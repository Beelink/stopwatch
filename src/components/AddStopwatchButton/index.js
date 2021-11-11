import "./index.scss";
import { connect } from "react-redux";
import { useRef } from "react";
import { addStopwatch } from "../../store/actions/stopwatch";
import stopwatchUtils from "../../utils/stopwatch";

const AddStopwatchButton = ({ addStopwatch }) => {
  const input = useRef();

  const _addStopwatch = () => {
    addStopwatch(stopwatchUtils.generateNewStopwatch(input.current.value));
    input.current.value = "";
  };

  return (
    <div className="add-stopwatch-button">
      <input
        className="add-stopwatch-button__input"
        type="text"
        ref={input}
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

const mapDispatchToProps = (dispatch) => {
  return {
    addStopwatch: (data) => dispatch(addStopwatch(data)),
  };
};

export default connect(null, mapDispatchToProps)(AddStopwatchButton);
