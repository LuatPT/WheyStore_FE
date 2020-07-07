const getListPost = (state = [], action) => {
  switch (action.type) {
    case 'GET_NEW_POST':
      return action.listNewPost
    case 'GET_ALL_POST':
      return action.listAllPost
    default:
      return state
  }
}
export default getListPost