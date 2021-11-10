import "./index.scss";
import { connect } from "react-redux";
import { setHistory } from "../../store/actions/stopwatch";
import dateUtils from "../../utils/date";
import React, { useEffect, useState } from "react";
import localStorageUtils from "../../utils/localStorage";
import cn from "classnames";

const HistoryTable = ({ history, setHistory }) => {
  const [sort, setSort] = useState(null);

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
        setSort(s + "_desc")
      } else if (sort.endsWith("desc")) {
        setSort(null);
      }
    } else {
      setSort(s + "_asc");
    }
  };

  // useEffect(() => {
  //   console.log(sort)
  // }, [sort])

  if (history && history.length > 0) {
    return (
      <div className="history-table">
        <ul className="history-table__table">
          <li className="history-table__row" key={0}>
            <button
              onClick={() => {
                _toggleSort("title");
              }}
              className={cn({
                "history-table__col": true,
                "history-table__col--head": true,
                "history-table__col--asc": sort === "title_asc",
                "history-table__col--desc": sort === "title_desc",
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
              End time
            </button>
          </li>
          {history.map((item, index) => {
            return (
              <li className="history-table__row" key={index + 1}>
                {item.description ? (
                  <span className="history-table__col">{item.description}</span>
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
