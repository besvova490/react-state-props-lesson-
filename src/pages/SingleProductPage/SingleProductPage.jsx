import React from "react";
import { useParams } from "react-router-dom";

// helpers
import useFetch from "../../hooks/useFetch";
import products from "../../api/products";

// assets
import "../../assets/styles/pages/single-product-page.scss";


function SingleProductPage() {
  const { productId } = useParams();

  const [productData] = useFetch(() => products.getSingleItem(productId));


  return (
    <section className="locl-single-product-page">
      <div className="locl-single-product-page__body">
        <div className="locl-single-product-page__left">
          <div className="locl-single-product-page__main-image">
            <img src={productData?.image} alt="" />
          </div>
          <div className="locl-single-product-page__description">
            {productData?.description}
          </div>
        </div>
        <div className="locl-single-product-page__body-info">
          <h1 className="locl-single-product-page__title">{productData?.title}</h1>
          <p className="locl-single-product-page__price">{productData?.category}</p>
          <p className="locl-single-product-page__category">{productData?.price} $</p>
        </div>
      </div>
      <div className="locl-single-product-page__footer">

      </div>
    </section>
  )
};

export default SingleProductPage;
