import axios from 'axios';
import * as constants from '../../constants/index';
export const deleteTrainerAction = (trainer_id) => {
  return (dispatch) => {
    axios
      .delete(constants.api + '/trainers/' + trainer_id)
      .then((res) => {
        dispatch(deleteTrainer(res.data));
        alert("Trainer have been deleted!")
      })
      .catch((err) => console.log(err));
  };
};
const deleteTrainer = (message) => ({
  type: 'DELETE_TRAINER',
  message,
});
