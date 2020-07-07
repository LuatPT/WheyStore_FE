const getListCart = (state = [], action) => {
  switch (action.type) {
    case 'GET_CART':
      return action.listCart
    default:
      return state
  }
}
export default getListCart