const listCateReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_CATEGORY':
      return action.listCategory
    default:
      return state
  }
}
export default listCateReducer