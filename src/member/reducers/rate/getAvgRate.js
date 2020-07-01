const getAvgRate = (state = 5, action) => {
  switch (action.type) {
    case 'AVG_RATE':
      return action.avgRate;
    default:
      return state;
  }
};
export default getAvgRate;
