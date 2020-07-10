const getListTrainer = (state = [], action) => {
  switch (action.type) {
    case 'GET_NEW_TRAINER':
      return action.listNewTrainer
    case 'GET_ALL_TRAINER':
      return action.listAllTrainer
    default:
      return state
  }
}
export default getListTrainer