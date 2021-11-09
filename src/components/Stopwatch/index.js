import "./index.scss";

function Stopwatch({ value, play, playChanged }) {
  const _onChange = () => {
    playChanged(!play);
  };

  const _formatValue = (value) => {
    let secNum = parseInt(value, 10);
    let hours   = Math.floor(secNum / 3600);
    let minutes = Math.floor((secNum - (hours * 3600)) / 60);
    let seconds = secNum - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}

    return hours+':'+minutes+':'+seconds;
  };

  return (
    <div className="stopwatch">
      <h3 className="stopwatch__value">{ _formatValue(value) }</h3>
      <ul className="stopwatch__buttons">
        <li>
          <button className="stopwatch__button" onClick={_onChange}>
            {play ? <span>Pause</span> : <span>Play</span>}
          </button>
          <button className="stopwatch__button">Reset</button>
        </li>
      </ul>
    </div>
  );
}

export default Stopwatch;
