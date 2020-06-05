const addCartReducer = (state = "", action) => {
  switch (action.type) {
    case 'ADD_CART':
      return action.message
    default:
      return state
  }
}
export default addCartReducer