import axios from 'axios';
import * as constants from '../../constants/index';
export const getDetailTrainer = (trainer_id) => {
  return (dispatch) => {
    axios
      .get(constants.api + '/trainers/' + trainer_id)
      .then((res) => {
        dispatch(detailTrainer(res.data));
      })
      .catch((err) => console.log(err));
  };
};
const detailTrainer = (trainer) => ({
  type: 'DETAIL_TRAINER',
  trainer,
});
