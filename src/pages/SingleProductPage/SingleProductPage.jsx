import React from "react";
import { useParams } from "react-router-dom";
import { Skeleton } from "antd";

// helpers
import useFetch from "../../hooks/useFetch";
import products from "../../api/products";


function SingleProductPage() {
  const { productId } = useParams();

  const [productData, isLoading] = useFetch(() => products.getSingleItem(productId));

  return (
    <section>
      {
        isLoading
          ? <Skeleton active/>
          : (<>
            <h1>{productData?.title}</h1>
            <p>
              {productData?.description}
            </p>
            <img src={productData?.image} alt="" />
          </>)
      }
    </section>
  )
};

export default SingleProductPage;
