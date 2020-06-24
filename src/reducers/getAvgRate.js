const getAvgRate = (state = 5, action) => {
  switch (action.type) {
    case 'AVG_RATE':
      console.log(action.avgRate);
      return action.avgRate;
    default:
      return state;
  }
};
export default getAvgRate;
