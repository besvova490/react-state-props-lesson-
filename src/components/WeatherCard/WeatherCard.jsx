import React from "react";
import classNames from "classnames";

// assets
import "../../assets/styles/components/weather-card.scss";


function WeatherCard({ title, temperature, icon, className, color = "blue", fullWidth, hide }) {
  // const { title, temperature, icon } = props;
  const cardClassNames = classNames(
    "lsn-weather-card",
    `lsn-weather-card_color-${color}`,
    className,
    {
      "lsn-weather-card_full-width": fullWidth,
    },
  );

  if (hide) {
    return null;
  }

  console.log(cardClassNames);


  return (
    <div className={cardClassNames}>
      <p className="lsn-weather-card__title">
        { title }
      </p>
      <div className="lsn-weather-card__info">
        <span className="lsn-weather-card__temperature">
          { temperature }
        </span>
        <span className="lsn-weather-card__icon">
          { icon }
        </span>
      </div>
    </div>
  );
}

export default WeatherCard;
