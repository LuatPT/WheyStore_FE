const detailProduct = (state = {}, action) => {
  switch (action.type) {
    case 'DETAIL_PRODUCT':
      return action.product;
    case 'SHOW_DETAIL_PRODUCT':
      return action.product;
    default:
      return state;
  }
};
export default detailProduct;
