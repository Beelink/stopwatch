import "./index.scss";
import { connect } from "react-redux";
import { clearHistory } from "../../store/actions/stopwatch";

const HistoryTable = ({ history }) => {
  if (history && history.length > 0) {
    return (
      <div className="history-table">
        <ul className="history-table__table">
          <li className="history-table__row" key={0}>
            <span className="history-table__col history-table__col--empty">
              Title
            </span>
            <span className="history-table__col history-table__col--empty">
              Start time
            </span>
            <span className="history-table__col history-table__col--empty">
              Value
            </span>
            <span className="history-table__col history-table__col--empty">
              End time
            </span>
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
                <span className="history-table__col">{item.start}</span>
                <span className="history-table__col">{item.value}</span>
                <span className="history-table__col">{item.value}</span>
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
    clearHistory: () => dispatch(clearHistory()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HistoryTable);
