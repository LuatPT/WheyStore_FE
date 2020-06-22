const getRateByProduct = (state = [], action) => {
  switch (action.type) {
    case 'GET_RATE':
      return action.listRate;
    default:
      return state;
  }
};
export default getRateByProduct;
