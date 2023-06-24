import * as actionTypes from "./wishListActionTypes";

export const addItemToWishList = (payload) => ({
  type: actionTypes.ADD_NEW_ITEM_TO_WISH_LIST,
  payload
});

export const removeItemFromWishList = (payload) => ({
  type: actionTypes.REMOVE_ITEM_FROM_WISH_LIST,
  payload
});
