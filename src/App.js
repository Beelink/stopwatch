import AddStopwatchButton from "./components/AddStopwatchButton";
import StopwatchList from "./components/StopwatchList";
import HistoryTable from "./components/HistoryTable";

function App() {
  return (
    <div className="app">
      <AddStopwatchButton />
      <StopwatchList />
      <HistoryTable />
    </div>
  );
}

export default App;
