import axios from 'axios';
import * as constants from '../../constants/index';
export const updateTrainerAction = (obj) => {
  return (dispatch) => {
    axios
      .put(constants.api + '/trainers/' + obj.trainer_id, obj)
      .then((res) => {
        dispatch(updateTrainer(res.data));
        alert("Trainer have been updated!")
      })
      .catch((err) => console.log(err));
  };
};
const updateTrainer = (message) => ({
  type: 'UPDATE_TRAINER',
  message,
});
