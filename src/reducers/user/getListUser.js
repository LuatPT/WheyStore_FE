const getListUser = (state = [], action) => {
  switch (action.type) {
    case 'GET_LIST_USER':
      return action.listUser
    default:
      return state
  }
}
export default getListUser