const productReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_PRODUCT_BY_CATE':
      return action.listProduct
    default:
      return state;
  }
}
export default productReducer