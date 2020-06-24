const detailPost = (state = {}, action) => {
  switch (action.type) {
    case 'DETAIL_POST':
      return action.post;
    default:
      return state;
  }
};
export default detailPost;
