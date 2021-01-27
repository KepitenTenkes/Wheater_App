import React from "react";
import "./Temp.css";

const Temp = (props) => {
  return (
    <div className="Temp">
      <span className="Min">{props.minTemp}&#176;</span>
      <span className="Max">{props.maxTemp}&#176;</span>
    </div>
  );
};

export default Temp;
