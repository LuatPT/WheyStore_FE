const detailTrainer = (state = {}, action) => {
  switch (action.type) {
    case 'DETAIL_TRAINER':
      return action.trainer;
    default:
      return state;
  }
};
export default detailTrainer;
