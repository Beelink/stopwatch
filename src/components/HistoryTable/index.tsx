import "./index.scss";
import { setHistory } from "../../store/stopwatch/stopwatch.actions";
import dateUtils from "../../utils/date";
import { FunctionComponent, useEffect, useState, useCallback } from "react";
import localStorageUtils from "../../utils/localStorage";
import cn from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { GlobalState } from "../../types/state";
import { SortableHistoryItem } from "./types";

const HistoryTable: FunctionComponent = () => {
  const dispatch = useDispatch();
  const history = useSelector((state: GlobalState) => state.stopwatch.history);
  const [sort, setSort] = useState<string | null>(null);
  const [sortedHistory, setSortedHistory] = useState<SortableHistoryItem[]>([]);

  useEffect(() => {
    const h = localStorageUtils.loadHistory();
    if (h && h.length) {
      dispatch(setHistory(h));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorageUtils.saveHistory(history);
  }, [history]);

  const _toggleSort = (s: string) => {
    if (sort && sort.startsWith(s)) {
      if (sort.endsWith("asc")) {
        setSort(s + "_desc");
      } else if (sort.endsWith("desc")) {
        setSort(null);
      }
    } else {
      setSort(s + "_asc");
    }
  };

  const _clearHistory = () => {
    dispatch(setHistory([]));
  };

  const _compare = useCallback(
    (a: SortableHistoryItem, b: SortableHistoryItem) => {
      if (sort) {
        const s = sort.substr(0, sort.indexOf("_"));

        let prop1: string = "";
        let prop2: string = "";
        switch (s) {
          case "description":
            prop1 = a.description;
            prop2 = b.description;
            break;
          case "start":
            prop1 = a.start;
            prop2 = b.start;
            break;
          case "value":
            prop1 = a.value;
            prop2 = b.value;
            break;
          case "finish":
            prop1 = a.finish;
            prop2 = b.finish;
            break;
        }
        prop1 = prop1.toLowerCase();
        prop2 = prop2.toLowerCase();

        if (prop1 < prop2) {
          if (sort.endsWith("asc")) {
            return -1;
          } else {
            return 1;
          }
        }
        if (prop1 > prop2) {
          if (sort.endsWith("asc")) {
            return 1;
          } else {
            return -1;
          }
        }
      }
      return 0;
    },
    [sort]
  );

  useEffect(() => {
    if (history) {
      const h = history.map((item) => {
        return {
          description: item.description || "",
          start: dateUtils.formatDate(item.start),
          value: dateUtils.formatValue(item.value),
          finish: dateUtils.formatDate(item.finish),
        };
      });
      setSortedHistory(h.sort(_compare));
    } else {
      setSortedHistory(history);
    }
  }, [sort, history, _compare]);

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
                "history-table__col--asc": sort === "description_asc",
                "history-table__col--desc": sort === "description_desc",
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
                "history-table__col--asc": sort === "start_asc",
                "history-table__col--desc": sort === "start_desc",
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
                "history-table__col--asc": sort === "value_asc",
                "history-table__col--desc": sort === "value_desc",
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
                "history-table__col--asc": sort === "finish_asc",
                "history-table__col--desc": sort === "finish_desc",
              })}
            >
              Stop time
            </button>
          </li>
          {sortedHistory.map((item, index) => {
            return (
              <li className="history-table__row" key={index + 1}>
                {item.description ? (
                  <span className="history-table__col">{item.description}</span>
                ) : (
                  <span className="history-table__col history-table__col--empty">
                    No description
                  </span>
                )}
                <span className="history-table__col">{item.start}</span>
                <span className="history-table__col">{item.value}</span>
                <span className="history-table__col">{item.finish}</span>
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
