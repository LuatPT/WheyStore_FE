import axios from 'axios';
import * as constants from '../../constants/index';
export const addTrainerAction = (obj) => {
  return (dispatch) => {
    axios
      .post(constants.api + '/trainers', obj)
      .then((res) => {
        dispatch(addTrainer(res.data));
        alert("Trainer have been added!")
      })
      .catch((err) => console.log(err));
  };
};
const addTrainer = (message) => ({
  type: 'ADD_TRAINER',
  message,
});
