import * as actionsTypes from "./wishListActionTypes";

const INITIAL_STATE = {
  items: [],
};

function createReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case actionsTypes.ADD_NEW_ITEM_TO_WISH_LIST:
    return { ...state, items: [...state.items, action.payload] };
  case actionsTypes.REMOVE_ITEM_FROM_WISH_LIST:
    const newItemsList = state.items.filter(item => item.id !== action.payload.id)

    return { ...state, items: newItemsList };
  default:
    return state;
  }
}

export default createReducer;
