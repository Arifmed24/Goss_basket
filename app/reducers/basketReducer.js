import { ADD_PRODUCT, REMOVE_PRODUCT } from '../actions/types';

function addProductToList(list, newProduct) {
  let added = false;
  list.forEach((product) => {
    if (product.id === newProduct.id) {
      product.count++;
      added = true;
    }
  });

  if (!added) {
    newProduct.count = 1;
    return list.concat(newProduct);
  }
  return list;
}

const initialState = {
  price: 500,
  products: [],
};

function removeProductFromList(list, newProduct) {
  list.forEach((product, index, object) => {
      if (product.id === newProduct.id) {
          if (product.count !== 1) {
            product.count--;
          } else {
            object.splice(index, 1);
          }
      }
    });
    return list;
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        price: state.price - action.params.price,
        products: addProductToList(state.products, action.params),
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        price: state.price + action.params.price,
        products: removeProductFromList(state.products, action.params),
      };
    default:
      return state;
  }
}
