import React from "react";
import { Rate } from "antd";
import { Link } from "react-router-dom";

// assets
import "../../assets/styles/components/single-product-card.scss"


function SingleProductCard({ image, title, price, rating, isHorizontal, singleItemUrl }) {
  return (
    <div className={`mdst-single-product-card ${isHorizontal ? "mdst-single-product-card_horizontal-view" : ""}`}>
      <div className="mdst-single-product-card__image">
        <img src={image} alt={title} className="mdst-single-product-card__image-tag"/>
      </div>
      <div className="mdst-single-product-card__info">
        <Link className="mdst-single-product-card__info__title" to={singleItemUrl}>{ title }</Link>
        <Rate disabled defaultValue={rating} />
        <span className="mdst-single-product-card__info__price">{ price }</span>
      </div>
    </div>
  )
};

export default SingleProductCard;
