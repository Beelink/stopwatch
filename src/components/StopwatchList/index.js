import "./index.scss";
import Stopwatch from "../Stopwatch";

function StopwatchList() {
  const [ stopwatches, setStopwatches ] = useState([
    {
      id: 0,
      value: 0,
      play: false,
    },
  ]);

  return (
    <div className="stopwatch-list">
      {stopwatches.map((stopwatch) => {
        return <Stopwatch key={id} {...stopwatch} />;
      })}
    </div>
  );
}

export default StopwatchList;
