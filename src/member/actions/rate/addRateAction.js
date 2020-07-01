import axios from 'axios';
import * as constants from '../../constants/index';

export const addRateAction = (obj) => {
  console.log(obj);
  return (dispatch) => {
    axios
      .post(constants.api + '/rates/', obj, {
        headers: { 'access-token': localStorage.getItem('token') },
      })
      .then((res) => {
        dispatch(addRate(res.data));
        alert(res.data);
      })
      .catch((err) => console.log(err));
  };
};
const addRate = (message) => ({
  type: 'ADD_RATE',
  message,
});
