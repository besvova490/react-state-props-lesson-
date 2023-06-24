import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <title>MOODY STUDIO | {productData?.title || ""}</title>
        <meta name="description" content={productData?.description || ""} />
      </Helmet>
      <div className="locl-single-product-page__body">
        <div className="locl-single-product-page__left">
          <div className="locl-single-product-page__main-image">
            <img
              src="https://fastly.picsum.photos/id/365/720/920.jpg?hmac=ROmUZVYbJjYaupKcyVR5i5VeOefh_7oI6BIRbVDVMZw"
              loading="lazy"
            />
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
