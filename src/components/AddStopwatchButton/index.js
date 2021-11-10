import "./index.scss";
import { connect } from "react-redux";
import { addStopwatch } from "../../store/actions/stopwatch";
import stopwatchUtils from "../../utils/stopwatch";

const AddStopwatchButton = ({ addStopwatch }) => {
  const _addStopwatch = () => {
    addStopwatch(stopwatchUtils.generateNewStopwatch());
  };

  return (
    <div className="add-stopwatch-button">
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
