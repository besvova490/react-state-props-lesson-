import React from "react";
import { Rate } from "antd";
import { Link } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useDispatch, connect } from "react-redux";

// helpers
import { addItemToWishList, removeItemFromWishList } from "../../redux/wishList/wishListActions";

// assets
import "../../assets/styles/components/single-product-card.scss"


function SingleProductCard(props) {
  const {
    image,
    title,
    price,
    rating,
    isHorizontal,
    singleItemUrl,
    id,
    wishList,
    addToWithList,
    removeFromWishList
  } = props;

  // const dispatch = useDispatch();


  const onAddWishList = () => {
    console.log("onAddWishList");
    addToWithList({ image, title, price, rating, singleItemUrl, id });
  }

  const onRemoveFromWishList = () => {
    console.log("onRemoveFromWishList");
    removeFromWishList({ id });
  }

  return (
    <div className={`mdst-single-product-card ${isHorizontal ? "mdst-single-product-card_horizontal-view" : ""}`}>
      <div className="mdst-single-product-card__image">
        <img src={image} alt={title} className="mdst-single-product-card__image-tag"/>
      </div>
      <div className="mdst-single-product-card__info">
        <Link className="mdst-single-product-card__info__title" to={singleItemUrl}>{ title }</Link>
        {
          wishList.items.some(item => item.id === id)
            ? <AiFillHeart onClick={onRemoveFromWishList}/>
            : <AiOutlineHeart onClick={onAddWishList}/>
        }
        <Rate disabled defaultValue={rating} />
        <span className="mdst-single-product-card__info__price">{ price }</span>
      </div>
    </div>
  )
};

const mapStateToProps = (state) => {
  return { wishList: state.wishList, };
};

const mapDispatchToProps = {
  addToWithList: addItemToWishList,
  removeFromWishList: removeItemFromWishList
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleProductCard);
