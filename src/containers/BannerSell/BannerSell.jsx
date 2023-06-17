import React from "react";
import { useNavigate } from "react-router-dom"

// elements
import Button from "../../elements/Button";

// assets
import "../../assets/styles/containers/banner-sell.scss"


const BannerSell = ({ title, image, price, description, discount, }) => {
  const navigate = useNavigate();


  return (
    <section className="mdst-banner-sell">
      <div className="mdst-banner-sell__banner-block">
        <h2 className="mdst-banner-sell__banner-block__title">{ title }</h2>
        <div className="mdst-banner-sell__banner-block__price">
          <span className="mdst-banner-sell__banner-block__price-value">{ price }</span>
          { discount && <span className="mdst-banner-sell__banner-block__price-value_discount">{ discount }</span> }
        </div>
        <p className="mdst-banner-sell__banner-block__description">
          { description }
        </p>
        <Button
          type="secondary"
          onClick={() => navigate("/categories")}
        >
          VIEW DETAILS
        </Button>
      </div>
      <img src={image} alt={title} className="mdst-banner-sell__banner-block__banner-image"/>
    </section>
  );
};

export default BannerSell;
