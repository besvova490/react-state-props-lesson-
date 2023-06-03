import React from "react";

// assets
import "../../assets/styles/containers/weather-grid.scss";


function WeatherGrid({ children }) {
  
  
  return (
    <div className="lsn-weather-grid">
      { children }
    </div>
  );
}

export default WeatherGrid;
