const listProductReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_PRODUCT':
      return action.listProduct
    default:
      return state
  }
}
export default listProductReducer