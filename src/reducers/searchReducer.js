const searchReducer = (state = '', action) => {
  switch (action.type) {
    case 'SEARCH_ACTION':
      return action.keyword;
    default:
      return state;
  }
};
export default searchReducer;
