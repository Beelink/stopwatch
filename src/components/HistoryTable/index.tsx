import "./index.scss";
import {
  setHistory,
  setHistorySortMethod,
} from "../../store/stopwatch/stopwatch.actions";
import dateUtils from "../../utils/date";
import { FunctionComponent, useEffect } from "react";
import localStorageUtils from "../../utils/localStorage";
import cn from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { GlobalState } from "../../types/state";
import { HistorySortMethod } from "../../enums/historySortMethod";

const HistoryTable: FunctionComponent = () => {
  const dispatch = useDispatch();
  const history = useSelector((state: GlobalState) => state.stopwatch.history);
  const historySortMethod = useSelector(
    (state: GlobalState) => state.stopwatch.historySortMethod
  );

  useEffect(() => {
    const h = localStorageUtils.loadHistory();
    if (h && h.length) {
      dispatch(setHistory(h));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorageUtils.saveHistory(history);
  }, [history]);

  const _toggleSort = (option: string) => {
    switch (option) {
      case "description":
        if (historySortMethod === HistorySortMethod.descriptionAsc) {
          dispatch(setHistorySortMethod(HistorySortMethod.descriptionDesc));
        } else if (historySortMethod === HistorySortMethod.descriptionDesc) {
          dispatch(setHistorySortMethod(HistorySortMethod.none));
        } else {
          dispatch(setHistorySortMethod(HistorySortMethod.descriptionAsc));
        }
        break;
      case "start":
        if (historySortMethod === HistorySortMethod.startAsc) {
          dispatch(setHistorySortMethod(HistorySortMethod.startDesc));
        } else if (historySortMethod === HistorySortMethod.startDesc) {
          dispatch(setHistorySortMethod(HistorySortMethod.none));
        } else {
          dispatch(setHistorySortMethod(HistorySortMethod.startAsc));
        }
        break;
      case "value":
        if (historySortMethod === HistorySortMethod.valueAsc) {
          dispatch(setHistorySortMethod(HistorySortMethod.valueDesc));
        } else if (historySortMethod === HistorySortMethod.valueDesc) {
          dispatch(setHistorySortMethod(HistorySortMethod.none));
        } else {
          dispatch(setHistorySortMethod(HistorySortMethod.valueAsc));
        }
        break;
      case "finish":
        if (historySortMethod === HistorySortMethod.finishAsc) {
          dispatch(setHistorySortMethod(HistorySortMethod.finishDesc));
        } else if (historySortMethod === HistorySortMethod.finishDesc) {
          dispatch(setHistorySortMethod(HistorySortMethod.none));
        } else {
          dispatch(setHistorySortMethod(HistorySortMethod.finishAsc));
        }
        break;
    }
  };

  const _clearHistory = () => {
    dispatch(setHistory([]));
  };

  // const _compare = useCallback(
  //   (a: SortableHistoryItem, b: SortableHistoryItem) => {
  //     if (sort) {
  //       const s = sort.substr(0, sort.indexOf("_"));

  //       let prop1: string = "";
  //       let prop2: string = "";
  //       switch (s) {
  //         case "description":
  //           prop1 = a.description;
  //           prop2 = b.description;
  //           break;
  //         case "start":
  //           prop1 = a.start;
  //           prop2 = b.start;
  //           break;
  //         case "value":
  //           prop1 = a.value;
  //           prop2 = b.value;
  //           break;
  //         case "finish":
  //           prop1 = a.finish;
  //           prop2 = b.finish;
  //           break;
  //       }
  //       prop1 = prop1.toLowerCase();
  //       prop2 = prop2.toLowerCase();

  //       if (prop1 < prop2) {
  //         if (sort.endsWith("asc")) {
  //           return -1;
  //         } else {
  //           return 1;
  //         }
  //       }
  //       if (prop1 > prop2) {
  //         if (sort.endsWith("asc")) {
  //           return 1;
  //         } else {
  //           return -1;
  //         }
  //       }
  //     }
  //     return 0;
  //   },
  //   [sort]
  // );

  // useEffect(() => {
  //   if (history) {
  //     const h = history.map((item) => {
  //       return {
  //         description: item.description || "",
  //         start: dateUtils.formatDate(item.start),
  //         value: dateUtils.formatValue(item.value),
  //         finish: dateUtils.formatDate(item.finish),
  //       };
  //     });
  //     setSortedHistory(h.sort(_compare));
  //   } else {
  //     setSortedHistory(history);
  //   }
  // }, [sort, history, _compare]);

  if (history && history.length > 0) {
    return (
      <div className="history-table">
        <ul className="history-table__table">
          <li className="history-table__row" key={0}>
            <button
              onClick={() => {
                _toggleSort("description");
              }}
              className={cn({
                "history-table__col": true,
                "history-table__col--head": true,
                "history-table__col--asc":
                  historySortMethod === HistorySortMethod.descriptionAsc,
                "history-table__col--desc":
                  historySortMethod === HistorySortMethod.descriptionDesc,
              })}
            >
              Title
            </button>
            <button
              onClick={() => {
                _toggleSort("start");
              }}
              className={cn({
                "history-table__col": true,
                "history-table__col--head": true,
                "history-table__col--asc":
                  historySortMethod === HistorySortMethod.startAsc,
                "history-table__col--desc":
                  historySortMethod === HistorySortMethod.startDesc,
              })}
            >
              Start time
            </button>
            <button
              onClick={() => {
                _toggleSort("value");
              }}
              className={cn({
                "history-table__col": true,
                "history-table__col--head": true,
                "history-table__col--asc":
                  historySortMethod === HistorySortMethod.valueAsc,
                "history-table__col--desc":
                  historySortMethod === HistorySortMethod.valueDesc,
              })}
            >
              Value
            </button>
            <button
              onClick={() => {
                _toggleSort("finish");
              }}
              className={cn({
                "history-table__col": true,
                "history-table__col--head": true,
                "history-table__col--asc":
                  historySortMethod === HistorySortMethod.finishAsc,
                "history-table__col--desc":
                  historySortMethod === HistorySortMethod.finishDesc,
              })}
            >
              Stop time
            </button>
          </li>
          {history.map((item, index) => {
            return (
              <li className="history-table__row" key={index + 1}>
                {item.description ? (
                  <span className="history-table__col">
                    {item.description || ""}
                  </span>
                ) : (
                  <span className="history-table__col history-table__col--empty">
                    No description
                  </span>
                )}
                <span className="history-table__col">
                  {dateUtils.formatDate(item.start)}
                </span>
                <span className="history-table__col">
                  {dateUtils.formatValue(item.value)}
                </span>
                <span className="history-table__col">
                  {dateUtils.formatDate(item.finish)}
                </span>
              </li>
            );
          })}
        </ul>
        <div className="history-table__footer">
          <button onClick={_clearHistory}>Clear history</button>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default HistoryTable;
