import axios from 'axios';
import * as constants from '../../constants/index';
export const getAllTrainerAction = () => {
  return (dispatch) => {
    axios({
      method: 'get',
      url: constants.api + '/trainers/',
    })
      .then((res) => {
        dispatch(getAllTrainer(res.data));
      })
      .catch((err) => console.log(err));
  };
};
const getAllTrainer = (listAllTrainer) => ({
  type: 'GET_ALL_TRAINER',
  listAllTrainer,
});
