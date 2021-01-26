import React from "react";
import "./Icon.css";
import Cloudy from "../../assets/cloudy.svg";
import Rain from "../../assets/rain.svg";
import Snowing from "../../assets/snowing.svg";
import Sun from "../../assets/sun.svg";
import Thermometer from "../../assets/thermometer.svg";

const Icon = (props) => {
  switch (props.icon) {
    case "Cloudy":
      return <img className="icon" src={Cloudy} alt={Cloudy} />;
      break;
    case "Rain":
      return <img className="icon" src={Rain} alt={Rain} />;
      break;
    case "Sun":
      return <img className="icon" src={Sun} alt={Sun} />;
      break;
    case "Snowing":
      return <img className="icon" src={Snowing} alt={Snowing} />;
      break;
    default:
      return <img className="icon" src={Thermometer} alt={Thermometer} />;
  }
};

export default Icon;
