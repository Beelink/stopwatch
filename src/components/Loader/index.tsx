import { FunctionComponent } from "react";
import "./index.scss";

const Loader: FunctionComponent = () => {
  return (
    <div className="loader">
      <div className="loader__lds-dual-ring"></div>
    </div>
  );
};

export default Loader;
