const getNewPost = (state = [], action) => {
  switch (action.type) {
    case 'GET_NEW_POST':
      return action.listNewPost
    default:
      return state
  }
}
export default getNewPost