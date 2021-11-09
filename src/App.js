import StopwatchList from "./components/StopwatchList";
import AddStopwatchButton from "./components/AddStopwatchButton";
import React, { useRef } from "react";

function App() {
  const stopwatchList = useRef(null);

  const _addStopwatch = () => {
    stopwatchList.current.addStopwatch();
  };

  return (
    <div className="app">
      <AddStopwatchButton onClick={_addStopwatch} />
      <StopwatchList ref={stopwatchList} />
    </div>
  );
}

export default App;
