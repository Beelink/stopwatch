import "./index.scss";

const AddStopwatchButton = ({ onClick }) => {
  return (
    <div className="add-stopwatch-button">
      <button
        title="Create stopwatch"
        onClick={onClick}
        className="add-stopwatch-button__button"
      >
        +
      </button>
    </div>
  );
};

export default AddStopwatchButton;
