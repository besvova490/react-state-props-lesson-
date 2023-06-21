import React, { useEffect, useState } from "react";
import { Spin } from "antd";

// container
import BannerSell from "../../containers/BannerSell";

// components
import SingleProductCard from "../../components/SingleProductCard";

// elements
import Button from "../../elements/Button";

// helpers
import products from "../../api/products";

// assets
import "../../assets/styles/pages/home-page.scss";


function HomePage() {
  const [productsList, setProductsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchItems = async () => {
    setIsLoading(true);

    const response = await products.get("limit=9&sort=acd");

    setProductsList(response);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  console.log(process.env.REACT_APP_API_KEY)

  const productsListToRender = productsList.map((item, index) => (
    <SingleProductCard
      key={`${index}-${item.title}`}
      image={item.image}
      title={item.title}
      price={`$ ${item.price}`}
      rating={item.rating.rate}
      singleItemUrl={`/products/${item.id}`}
      isHorizontal
    />
  ))

  return (
    <section className="mdst-home-page">
      <BannerSell
        title="Welcome to our store"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        price="$ 99.99"
        discount="$ 199.99"
        image="https://picsum.photos/1200/720"
      />
      <div className="mdst-home-page__top-rating">
        <h2 className="mdst-home-page__top-rating__title">
          TOP RATING
        </h2>
        {
          isLoading
            ? <Spin size="large" />
            : (
              <div className="mdst-home-page__top-rating__grid">
                { productsListToRender }
              </div>
            )
        }
        <Button>
          load more products
        </Button>
      </div>
    </section>
  )
};

export default HomePage;
