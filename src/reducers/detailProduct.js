const detailProduct = (state = {}, action) => {
  switch (action.type) {
    case 'DETAIL_PRODUCT':
      console.log(action.product);

      return action.product;
    default:
      return state;
  }
};
export default detailProduct;
