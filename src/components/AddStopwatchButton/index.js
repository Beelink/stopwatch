import "./index.scss";
import { connect } from "react-redux";

import { addStopwatch } from "../../store/actions/stopwatch";

const AddStopwatchButton = (props) => {
  const _generateStopwatchData = () => {
    return {
      id: new Date().valueOf(),
      value: 0,
      play: false,
    };
  };

  const _addStopwatch = () => {
    props.addStopwatch(_generateStopwatchData());
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
