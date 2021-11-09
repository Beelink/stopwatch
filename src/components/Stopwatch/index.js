import './index.scss';

function Stopwatch({ id, value, play, valueChanged, playChanged }) {
  return (
    <div className="stopwatch">
      <ul className="stopwatch__buttons">
        <li>
          { play ? (
            <button className="stopwatch__button">Play</button>
          ) : (
            <button className="stopwatch__button">Play</button>
          ) }
        </li>
      </ul>
    </div>
  );
}

export default Stopwatch;
