import { HistorySortMethod } from "../enums/historySortMethod";
import { HistoryItem } from "../types/historyItem";

const _sort = function (history: HistoryItem[], method: HistorySortMethod) {
  function compare(a: HistoryItem, b: HistoryItem) {
    let left: number | string = "";
    let right: number | string = "";
    const desc: boolean =
      method === HistorySortMethod.none ||
      method === HistorySortMethod.descriptionDesc ||
      method === HistorySortMethod.startDesc ||
      method === HistorySortMethod.valueDesc ||
      method === HistorySortMethod.finishDesc;

    switch (method) {
      case HistorySortMethod.none:
        left = a.posNumber || 0;
        right = b.posNumber || 0;
        break;
      case HistorySortMethod.descriptionAsc:
      case HistorySortMethod.descriptionDesc:
        left = a.description;
        right = b.description;
        break;
      case HistorySortMethod.startAsc:
      case HistorySortMethod.startDesc:
        left = a.start || 0;
        right = b.start || 0;
        break;
      case HistorySortMethod.valueAsc:
      case HistorySortMethod.valueDesc:
        left = a.value;
        right = b.value;
        break;
      case HistorySortMethod.finishAsc:
      case HistorySortMethod.finishDesc:
        left = a.value;
        right = b.value;
        break;
    }

    if (desc) {
      if (left < right) return 1;
      if (left > right) return -1;
    } else {
      if (left < right) return -1;
      if (left > right) return 1;
    }
    return 0;
  }
  return history.sort(compare);
};

const historyUtils = {
  sortHistory: (
    history: HistoryItem[],
    method: HistorySortMethod
  ): HistoryItem[] => {
    return _sort(history, method);
  },
};

export default historyUtils;
