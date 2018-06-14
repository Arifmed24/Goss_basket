import { ADD_PRODUCT, REMOVE_PRODUCT } from './types';

export function addProductToBasket(product) {
  return (dispatch) => {
    dispatch({
      type: ADD_PRODUCT,
      params: product,
    });
  };
}

export function removeProductFromBasket(product) {
  return (dispatch) => {
    dispatch({
      type: REMOVE_PRODUCT,
      params: product,
    });
  };
}

