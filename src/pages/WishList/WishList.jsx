import React from "react";
import { useSelector } from "react-redux";

// components
import SingleProductCard from "../../components/SingleProductCard";


function WishList() {
  const wishList = useSelector(state => state.wishList);


  return (
    <section>
      {
        wishList.items.map((item, index) => (
          <SingleProductCard
            key={`${index}-${item.title}`}
            image={item.image}
            title={item.title}
            price={item.price}
            rating={item.rating}
            singleItemUrl={item.singleItemUrl}
            isHorizontal
            id={item.id}
          />
        ))
      }
    </section>
  )
};

export default WishList;
