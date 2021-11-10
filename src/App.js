import { Provider } from "react-redux";
import store from "./store";

import StopwatchList from "./components/StopwatchList";
import AddStopwatchButton from "./components/AddStopwatchButton";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <AddStopwatchButton />
        <StopwatchList />
      </div>
    </Provider>
  );
}

export default App;
