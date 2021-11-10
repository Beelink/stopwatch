import "./index.scss";
import { connect } from "react-redux";
import { setHistory } from "../../store/actions/stopwatch";
import dateUtils from "../../utils/date";
import React, { useEffect, useState } from "react";
import localStorageUtils from "../../utils/localStorage";
import cn from "classnames";

const HistoryTable = ({ history, setHistory }) => {
  const [sort, setSort] = useState(null);
  const [sortedHistory, setSortedHistory] = useState(history);

  useEffect(() => {
    const h = localStorageUtils.loadHistory();
    if (h && h.length) {
      setHistory(h);
    }
  }, []);

  useEffect(() => {
    localStorageUtils.saveHistory(history);
  }, [history]);

  const _toggleSort = (s) => {
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

  const _compare = (a, b) => {
    if (sort) {
      const s = sort.substr(0, sort.indexOf("_"));
      if (a[s].toLowerCase() < b[s].toLowerCase()) {
        if (sort.endsWith("asc")) {
          return -1;
        } else {
          return 1;
        }
      }
      if (a[s].toLowerCase() > b[s].toLowerCase()) {
        if (sort.endsWith("asc")) {
          return 1;
        } else {
          return -1;
        }
      }
    }
    return 0;
  };

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
  }, [sort, history]);

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
      </div>
    );
  } else {
    return <></>;
  }
};

const mapStateToProps = (state) => {
  return {
    history: state.stopwatch.history,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setHistory: (history) => dispatch(setHistory(history)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HistoryTable);
