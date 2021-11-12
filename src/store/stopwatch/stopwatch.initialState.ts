import { HistorySortMethod } from "../../enums/historySortMethod";
import { StopwatchState } from "../../types/state";

const stopwatchInitialState: StopwatchState = {
  stopwatches: [],
  history: [],
  historySortMethod: HistorySortMethod.none,
};

export default stopwatchInitialState;
