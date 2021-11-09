import "./index.scss";

function AddStopwatchButton({ onClick }) {
  return (
    <div className="add-stopwatch-button">
      <button onClick={ onClick } className="add-stopwatch-button__button">+</button>
    </div>
  );
}

export default AddStopwatchButton;
